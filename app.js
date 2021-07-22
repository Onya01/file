const sidebarWidgets = document.querySelectorAll('sidebar-widget');

sidebarWidgets.forEach(sidebarWidget => {
 sidebarWidget.addEventListener('mouseover', () => {
  sidebarWidget.childNodes[1].classList.add('img-darken');
 })

 sidebarWidget.addEventListener('mouseout', () => {
  sidebarWidget.childNodes[1].classList.remove('img-darken');
 })
})