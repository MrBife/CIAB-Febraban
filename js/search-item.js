var searchField = document.querySelectorAll('.search_list');

for (var i = searchField.length - 1; i >= 0; i--) {
  searchField[i].addEventListener('input', function(){

    var items = document.querySelectorAll('.pesquisa');

    if (this.value.length > 0) {

      for (var i = 0; i < items.length; i++) {

        var item     = items[i];
        var idItem   = item.querySelector('.item-name');
        var nomeItem = idItem.textContent;

        var searchRegex = new RegExp(this.value,"i");

        if (!searchRegex.test(nomeItem)) {
          item.classList.add('invisible');
        } else {
          item.classList.remove('invisible');
        }

      }

    } else {
      for (var i = 0; i < items.length; i++) {

        var item = items[i];

        item.classList.remove('invisible');

      }
    }

  })
}
