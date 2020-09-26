let array = [5, 9, 3, 1, 2, 8, 4, 7, 6];
//отсортированные элементы
let sorted = 0;
//функция сортировки
function sort(sortedscore) {
  //сравниваем два крайних элемента массива
  for (let i = array.length - 1; i > sortedscore; i--) {
    let box;
    //если элемент справа меньше, элементы меняются местами
    if (array[i] < array[i - 1]) {
      box = array[i - 1];
      array[i - 1] = array[i];
      array[i] = box;
    }
  }
  //наименьший элемент оказывается в начале массива, этот элемент считается отсортированным
  sorted++;
  //если весь массив отсортирован, возвращаем отсортированный массив
  if (sorted === array.length - 1) {
    return array;
  }
  //иначе сортируем дальше без учета отсортированных элементов
  sort(sorted);
}
sort(sorted);

console.log(array);
