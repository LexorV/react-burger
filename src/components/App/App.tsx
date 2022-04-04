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
import { NotFound } from './pages/NotFound/NotFound';
import { Feed } from './pages/feed/feed';
import { FeedDetailsOrder } from '../OrdesCards/DetailsOrder';
import { HistoryOrdes } from './pages/profile/HistoryOrdes';
export default function App() {
    const { ingredientsRequest, ingredientsFailed } = useSelector(state => state.ingredients);
    const dispatch = useDispatch();
    const { ingredient, orderCard } = useSelector(state => state.ingredientDetail);
    type Tlocation = {
        pathname?: string;
        state?: any
        search?: string;
        hash?: string;
        key?: string;
    }
    let location: Tlocation = useLocation()
    const navigate = useNavigate();
    let positionPopap = location.state && location.state.positionPopap
    const closeModal: () => void = () => {
        dispatch({ type: CLOSE_INGREDIENT_DETAILS })
        navigate(positionPopap.pathname)
    }
    React.useEffect(() => {
        dispatch(getIngredientsAction());
    }, [dispatch])

    React.useEffect(() => {
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
    }, [])
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
                            } />
                            <Route path={"/feed/:id"} element={
                                <Modal height={716} closeModal={() => closeModal()}>
                                    <FeedDetailsOrder />
                                </Modal>
                            } />
                            <Route path={"/profile/orders/:id"} element={<ProtectedRoute path="/profile/orders/id">
                                <Modal height={716} closeModal={() => closeModal()}>
                                    <FeedDetailsOrder />
                                </Modal>
                            </ProtectedRoute>} />
                        </Routes>}
                    <Routes location={positionPopap || location}>
                        <Route path="/" element={<MainBlock />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/reset-password" element={
                            <ResetPasswordForm />} />
                        <Route path="/feed/:id" element={<FeedDetailsOrder />} />
                        <Route path="/profile" element={<ProtectedRoute path="/profile">
                            <Profile />
                        </ProtectedRoute>} />
                        <Route path={"/profile/orders/:id"} element={<ProtectedRoute path="/profile/orders/id">
                        <FeedDetailsOrder />
                        </ProtectedRoute>} />
                        <Route path="/profile/orders" element={<ProtectedRoute path="/profile/orders">
                            <HistoryOrdes />
                        </ProtectedRoute>} />
                        <Route path={'/ingredients/:id'} element={
                            <IngredientDetails />
                        } />)
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </>
            </DndProvider>
        )
    }
}
