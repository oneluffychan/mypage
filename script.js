function download(){
    var link = document.createElement('a');
    link.download = 'filename.txt';
    link.href = 'data:text/plain;base64,' + btoa('Hello World!');
    link.click();
}

