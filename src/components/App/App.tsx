import React from 'react';
import { useNavigate, Routes, Route, useLocation, } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { DndProvider } from "react-dnd";
import { useSelector, useDispatch } from '../../services/hooks'
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredientsAction } from '../../services/action/Ingredients'
import { LoginForm } from './pages/LoginForm/LoginForm'
import { RegisterForm } from './pages/registerForm/RegisterForm';
import { ForgotPasswordForm } from './pages/forgot-passwordForm/ForgotPassword';
import { ResetPasswordForm } from './pages/reset-passwordForm/ResetPasswordForm';
import { Profile } from './pages/profile/Profile';
import { MainBlock } from '../MainBlock/MainBlock';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { CLOSE_INGREDIENT_DETAILS } from '../../services/action/IngredientDetail'
import { IngredientDetails } from '../IngredientDetails/IngredientDetails'
import { Modal } from '../Modal/Modal';
export default function App() {
    const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
    const dispatch = useDispatch();
    const { ingredient} = useSelector(state => state.ingredientDetail);
    type Tlocation = {
        pathname?: string;
        state?:any
        search?: string;
        hash?: string;
        key?: string;
    }
    let location:Tlocation = useLocation()
    const navigate = useNavigate();
    let positionPopap  = ingredient && location.state && location.state.positionPopap
    const closeModal: () => void = () => {
        dispatch({ type: CLOSE_INGREDIENT_DETAILS })
        navigate('/')
    }
    React.useEffect(() => {
        dispatch(getIngredientsAction());
    }, [dispatch])
    if (ingredientsFailed) {
        return <div>Произошла ошибка</div>;
    } else if (ingredientsRequest) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <DndProvider backend={HTML5Backend}>
                <>
                    <AppHeader />
                    {positionPopap &&
                        <Routes>
                            <Route path={'/ingredients/:id'} element={
                                <Modal height={539} closeModal={() => closeModal()}>
                                    <IngredientDetails />
                                </Modal>
                            } />)
                        </Routes>}
                    <Routes location={positionPopap || location}>
                        <Route path="/" element={<MainBlock />} />
                        <Route path="/login" element={<LoginForm  />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                        <Route path="/reset-password" element={
                            <ResetPasswordForm />} />
                        <Route path="/profile" element={<ProtectedRoute path="/profile">
                            <Profile />
                        </ProtectedRoute>} />

                        <Route path={'/ingredients/:id'} element={
                            <IngredientDetails />
                        } />)
                    </Routes>
                </>
            </DndProvider>
        )
    }
}
