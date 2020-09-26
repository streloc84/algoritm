let array = [5, 3, 4, 7, 2, 8, 6, 9, 1];
//нулевой элемент считается отсортированным
let sorted = 1;

function home_compare(place) {
  let box;
  /*из оставшихся чисел берется крайнее число и сравнивается с уже отсортированным,
    если отсортированное больше - меняем их местами. 
    Операция повторяется пока не достигнем числа меньше или крайнего места. */
  for (let i = place; i >= 0; i--) {
    if (array[i] < array[i - 1]) {
      box = array[i - 1];
      array[i - 1] = array[i];
      array[i] = box;
    }
  }
  //если весь массив отсортирован выходим
  if (sorted === array.length) {
    console.log(array);
    //если нет рекурсивно повторяем для неотсортированной части массива
  } else {
    home_compare(sorted++);
  }
}

home_compare(sorted);
