import { useState, useEffect } from 'react';
import { Tingredient } from '../../services/types/ingredientsType';
import ingredientDetailsStyles from './ingredientDetails.module.css';
import { useSelector, useDispatch } from '../../services/hooks';
import { useParams } from "react-router-dom";
export type TingredientDetails = {
    dataIngrid: Tingredient
}

export const IngredientDetails = () => {
    const { ingredients } = useSelector(state => state.ingredients);
    const [dataIngrid, setDataingrid] = useState<any>(ingredients);
    useEffect(() => {
        if (ingredients) {
            setDataingrid(ingredients.find((e: any) => e._id === urlIdData.id))
        }
    }, [ingredients])
    const urlIdData = useParams();
    return (
        <>
            {ingredients && dataIngrid && (
                <div className={ingredientDetailsStyles.main}>
                    <h2 className={`${ingredientDetailsStyles.title} mt-10 mr-10 ml-10 text text_type_main-large`}>Детали ингредиента</h2>
                    <img className={ingredientDetailsStyles.picture} src={dataIngrid.image} alt={dataIngrid.name} />
                    <p className={`${ingredientDetailsStyles.name} mt-4 mb-8 text text_type_main-medium`}>{dataIngrid.name}</p>
                    <ul className={ingredientDetailsStyles.сomposition}>
                        <li className={ingredientDetailsStyles.сomposition_list_box}>
                            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                            <p className="text text_type_digits-default text_color_inactive">{dataIngrid.calories}</p>
                        </li>
                        <li className={ingredientDetailsStyles.сomposition_list_box}>
                            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                            <p className="text text_type_digits-default text_color_inactive">{dataIngrid.proteins}</p>
                        </li>
                        <li className={ingredientDetailsStyles.сomposition_list_box}>
                            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                            <p className="text text_type_digits-default text_color_inactive">{dataIngrid.fat}</p>
                        </li>
                        <li className={ingredientDetailsStyles.сomposition_list_box}>
                            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                            <p className="text text_type_digits-default text_color_inactive">{dataIngrid.carbohydrates}</p>
                        </li>
                    </ul>
                </div>
            )
            }
        </>
    )


}


export default IngredientDetails