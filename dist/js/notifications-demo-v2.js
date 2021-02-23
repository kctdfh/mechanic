// ANCHOR Basic alerts

$("#basic").click(function() {
    $.notify({
        title: 'This is a basic alert',
        icon: '<i class="alert-icon feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title',
        className: 'basic',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="alert-icon feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-close',
        className: 'basic',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-close',
        className: 'basic',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon',
        className: 'basic',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-body-close',
        className: 'basic',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-body',
        className: 'basic',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-body-buttons-close',
        className: 'basic',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-icon-body-buttons',
        className: 'basic',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Info alerts

$("#info").click(function() {
    $.notify({
        title: 'This is a info alert',
        icon: '<i class="alert-icon feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title',
        className: 'info',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="alert-icon feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-close',
        className: 'info',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-close',
        className: 'info',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon',
        className: 'info',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-body-close',
        className: 'info',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-body',
        className: 'info',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-body-buttons-close',
        className: 'info',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-icon-body-buttons',
        className: 'info',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Error alerts

$("#error").click(function() {
    $.notify({
        title: 'This is a error alert',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title',
        className: 'error',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-close',
        className: 'error',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-close',
        className: 'error',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon',
        className: 'error',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-body-close',
        className: 'error',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-body',
        className: 'error',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-body-buttons-close',
        className: 'error',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-icon-body-buttons',
        className: 'error',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Warning alerts

$("#warning").click(function() {
    $.notify({
        title: 'This is a warning alert',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title',
        className: 'warning',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-close',
        className: 'warning',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-close',
        className: 'warning',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon',
        className: 'warning',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-body-close',
        className: 'warning',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-body',
        className: 'warning',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-body-buttons-close',
        className: 'warning',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-icon-body-buttons',
        className: 'warning',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Success alerts

$("#success").click(function() {
    $.notify({
        title: 'This is a success alert',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title',
        className: 'success',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-close',
        className: 'success',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-close',
        className: 'success',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon',
                className: 'success',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-body-close',
                className: 'success',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'title-icon-body',
                className: 'success',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-body-buttons-close',
                className: 'success',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="alert-icon feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'title-icon-body-buttons',
                className: 'success',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Click events for alerts

//listen for click events from this style
$(document).on('click', 'div[class^="notifyjs"] ._dismiss', function() {
$(this).trigger('notify-hide');
$.notify({
    title: 'Alert dismissed'
  }, { 
    style: 'title',
    className: 'warning',
    autoHide: true,
    clickToHide: true,
    globalPosition: 'right bottom'
});
});

$(document).on('click', 'div[class^="notifyjs"] ._confirm', function() {
$(this).trigger('notify-hide');
$.notify({
    title: 'Alert confirmed'
  }, { 
    style: 'title',
    className: 'success',
    autoHide: true,
    clickToHide: true,
    globalPosition: 'right bottom'
});
});

$(document).on('click', 'div[class^="notifyjs"] ._close', function() {
$(this).trigger('notify-hide');
$.notify({
    title: 'Alert closed'
  }, { 
    style: 'title',
    className: 'basic',
    autoHide: true,
    clickToHide: true,
    globalPosition: 'right bottom'
});
});