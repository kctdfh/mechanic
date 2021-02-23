// ANCHOR Basic alerts

$("#basic").click(function() {
    $.notify({
        title: 'This is a basic alert',
        icon: '<i class="feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-icon-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-icon',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-body-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-icon-body',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'basic-body-buttons-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#basic-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'basic-icon-body-buttons',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Info alerts

$("#info").click(function() {
    $.notify({
        title: 'This is a info alert',
        icon: '<i class="feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'info',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-icon-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-icon',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-body-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-icon-body',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'info-body-buttons-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#info-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'info-icon-body-buttons',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Error alerts

$("#error").click(function() {
    $.notify({
        title: 'This is a error alert',
        icon: '<i class="feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'error',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-icon-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-icon',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-body-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-icon-body',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'error-body-buttons-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#error-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'error-icon-body-buttons',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Warning alerts

$("#warning").click(function() {
    $.notify({
        title: 'This is a warning alert',
        icon: '<i class="feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-icon-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-icon',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-body-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-icon-body',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'warning-body-buttons-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#warning-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'warning-icon-body-buttons',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// ANCHOR Success alerts

$("#success").click(function() {
    $.notify({
        title: 'This is a success alert',
        icon: '<i class="feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'success',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-close").click(function() {
    $.notify({
        title: 'This is closable alert',
        icon: '<i class="feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-icon-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: '',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-icon',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-body-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-body").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-icon-body',
        autoHide: true,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-body-buttons-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'success-body-buttons-close',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

$("#success-icon-body-buttons").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '<button class="btn primary middle _confirm">Okay</button>',
        ghost: '<button class="btn ghost middle _dismiss">Dismiss</button>'
      }, { 
        style: 'success-icon-body-buttons',
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
    style: 'basic',
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
    style: 'success',
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
    style: 'basic',
    autoHide: true,
    clickToHide: true,
    globalPosition: 'right bottom'
});
});