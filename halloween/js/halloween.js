/*****************************************/
/* js functios for halloween exercise */
/* author: Sergio Ramos */
/* date: november 2023 */
/* comment: my first exercise with js functions */
/*****************************************/

function show(element) {
    document.getElementById(element).style.visibility="visible";
}

function hide(element) {
    document.getElementById(element).style.visibility="hidden";    
}

function sound(element) {
    document.getElementById(element).play();
}

function silence(element) {
    document.getElementById(element).pause();
}