function uploadFile(file, apiPostUrl) {
    var loaded = 0;
    var step = 1024 * 1024;
    var total = file.size;
    var start = 0;
    var filename = new Date().getTime() + file.name;

    var reader = new FileReader();
    reader.onloadstart = function (e) {
        $("#filesize").text("Selected file size is "+Math.round(total/1048576,1)+" MB").show();
        //$(".progress").show();
        //$('.progress-bar').css('width', '0%')
    };
    reader.onload = function (e) {
        if (!XMLHttpRequest.prototype.sendAsBinary) {
            XMLHttpRequest.prototype.sendAsBinary = function (datastr) {
                function byteValue(x) {
                    return x.charCodeAt(0) & 0xff;
                }
                var ords = Array.prototype.map.call(datastr, byteValue);
                var ui8a = new Uint8Array(ords);
                this.send(ui8a.buffer);
            }
        }

        var xhr = new XMLHttpRequest();
        var upload = xhr.upload;
        upload.addEventListener('load', function () {
            loaded += step;
            var valeur = Math.round((loaded / total) * 100);
            valeur = (valeur <= 100)?valeur:100;
            $('#progressbar').css('width', valeur + '%').attr('aria-valuenow', valeur).text(valeur + '% Complete');
            if (loaded <= total) {
                blob = file.slice(loaded, loaded + step);
                reader.readAsBinaryString(blob);
            } else {
                loaded = total;
            }
        }, false);

        xhr.open("POST", apiPostUrl + "?fileName=" + filename + "&nocache=" + new Date().getTime());
        xhr.overrideMimeType("application/octet-stream");
        xhr.sendAsBinary(e.target.result);
    };
    /* reader.onloadend = function (e) {
        $('#uploading').hide();
    }; */
    var blob = file.slice(start, step);
    reader.readAsBinaryString(blob);
}