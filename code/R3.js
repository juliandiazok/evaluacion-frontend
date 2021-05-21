var videoSrc='https://www.youtube.com/embed/QjSczsnRFMo';

$('#copaAmericaModal').on('show.bs.modal', function () {  
    var iframe=$('#iframeVideo');
    iframe.attr("src", videoSrc);
});

$('#copaAmericaModal').on('hidden.bs.modal', function (e) {
    
    var iframe=$('#iframeVideo');
    iframe.attr("src", videoSrc);

});
