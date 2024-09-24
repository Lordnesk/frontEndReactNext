import { useState } from 'react';
import { Dish } from '@/app/shared/interfaces/dish';

const useDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Omit<Dish, 'id'>) => {
    setDishes((prev) => [...prev, { ...dish, id: prev.length + 1 }]);
  };

  const deleteDish = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/dish/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'accept': '*/*',
        },
      });
      if (response.ok) {
        setDishes((prev) => prev.filter((dish) => dish.id !== id));
      } else {
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        console.error('Error al eliminar el plato:', response.status);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };

  const updateDish = (updatedDish: Dish) => {
    setDishes((prev) =>
      prev.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish))
    );
  };

  return {
    dishes,
    addDish,
    deleteDish,
    updateDish,
  };
};

export default useDishes;
