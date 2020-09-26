let array = [6, 1, 7, 8, 9, 3, 5, 4, 2];
let min;
let sorted = 0;
let box;
let minPlace;

function sort() {
  //находим минимальный элемент массива простым перебором
  for (let i = sorted; i <= array.length - 1; i++) {
    if (array[i] < min || min === undefined) {
      min = array[i];
      minPlace = i;
    }
  }
  //перемещаем его в начало массива
  box = array[sorted];
  array[sorted] = min;
  array[minPlace] = box;
  //элемент считается отсортированным
  sorted++;
  min = undefined;
  //если весь массив отсортирован возвращаем массив
  if (sorted === array.length - 1) {
    return array;
  }
  //если нет, продолжаем сортировать без учета отсортированного элемента
  sort();
}
sort();

console.log(array);
