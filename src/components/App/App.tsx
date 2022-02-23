import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import appStyle from './App.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
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
import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS } from '../../services/action/IngredientDetail'
import { IngredientDetails } from '../IngredientDetails/IngredientDetails'
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
export default function App() {
    const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
    const { registrationSuccess, resetSuccess } = useSelector(state => state.registrationForm)
    const [isLogin,
        setIsLogin] = useState<boolean>(true);
    const dispatch = useDispatch();
    const { ingredient } = useSelector(state => state.ingredientDetail);
    React.useEffect(() => {
        console.log(ingredient);
    }, [ingredient])
    const closeModal: () => void = () => {
        dispatch({ type: CLOSE_INGREDIENT_DETAILS })
    }
    const location: any = useLocation();
    // console.log(location);
    console.log(MainBlock)
    let background = location.state && location.state.background;
    React.useEffect(() => {
        dispatch(getIngredientsAction())
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
                    <Routes>
                        <Route path="/login" element={<LoginForm setIsLogin={setIsLogin} />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                        <Route path="/" element={<MainBlock />} />
                        <Route path="/reset-password" element={
                            <ProtectedRoute dataSuccess={resetSuccess}>
                                <ResetPasswordForm />
                            </ProtectedRoute>} />
                        <Route path="/profile" element={<ProtectedRoute
                            dataSuccess={registrationSuccess} path="/profile">
                            <Profile />
                        </ProtectedRoute>} />
                        {background && (
                            <Route path="/ingredients/:id">
                                <Modal height={539} closeModal={() => closeModal()}>
                                    <IngredientDetails dataIngrid={ingredient} />
                                </Modal>
                            </Route>
                        )}
                    </Routes>
                </>
            </DndProvider>
        )
    }
}
