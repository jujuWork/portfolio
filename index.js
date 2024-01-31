function checkURL (abc) {
    let string = abc.value;
    if (!~string.indexOf("http")) {
        string = "http://" + string;
    } 
    abc.value = string;
    return abc
}