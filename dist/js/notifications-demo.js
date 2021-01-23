// convert html to javascript string --> http://pojo.sodhanalibrary.com/string.html

// SECTION Add alert styles

// ANCHOR Basic alerts

$.notify.addStyle('basic', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-gray-25 border-gray-100 border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('basic-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-gray-25 inline-flex items-center w-full h-10 pl-3 pr-4 border border-gray-100">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>',    
});

$.notify.addStyle('basic-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-gray-25 inline-flex items-center w-full h-10 pl-3 pr-4 border border-gray-100">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon">'+
    '                            <i class="feather-info"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md my-auto font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('basic-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-gray-25 flex flex-row items-start w-full h-10 pl-3 pr-4 border border-gray-100">'+
    '                <div data-notify-html="icon" class="alert-icon">'+
    '                    <i class="feather-info"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('basic-icon-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-gray-25 pb-4 pl-4 pr-4 border border-gray-100">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('basic-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-gray-25 flex flex-row pl-3 pr-4 py-3.5 border border-gray-100">'+
    '                <div data-notify-html="icon">'+
    '                    <i class="feather-info"></i>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('basic-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-gray-25 flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border border-gray-100">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('basic-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-gray-25 flex flex-col space-y-2 border border-gray-100">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon">'+
    '                        <i class="feather-info"></i>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});

// ANCHOR Info alerts

$.notify.addStyle('info', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-blue-50 border-blue-500 border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-blue-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-blue-500">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-blue-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-blue-500">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon icon-blue">'+
    '                        <i class="feather-info"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-blue-50 flex flex-row items-start w-full h-10 pl-3 pr-4 border border-blue-500">'+
    '                <div data-notify-html="icon" class="alert-icon icon-blue">'+
    '                <i class="feather-info"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-icon-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-blue-50 pb-4 pl-4 pr-4 border border-blue-500">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-blue-50 flex flex-row pl-3 pr-4 py-3.5 border border-blue-500">'+
    '                <div data-notify-html="icon" class="icon-blue">'+
    '                    <i class="feather-info"></i>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('info-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-blue-50 flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border border-blue-500">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('info-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-blue-50 flex flex-col space-y-2 border border-blue-500">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon" class="icon-blue">'+
    '                        <i class="feather-info"></i>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});

// ANCHOR Error alerts

$.notify.addStyle('error', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-red-50 border-red-600 border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-red-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-red-600">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-red-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-red-600">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon icon-red">'+
    '                        <i class="feather-x-circle"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-red-50 flex flex-row items-start w-full h-10 pl-3 pr-4 border border-red-600">'+
    '                <div data-notify-html="icon" class="alert-icon icon-red">'+
    '                <i class="feather-x-circle"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-icon-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-red-50 pb-4 pl-4 pr-4 border border-red-600">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-red-50 flex flex-row pl-3 pr-4 py-3.5 border border-red-600">'+
    '                <div data-notify-html="icon" class="icon-red">'+
    '                    <div class="feather-x-circle"></div>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('error-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-red-50 flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border border-red-600">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('error-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-red-50 flex flex-col space-y-2 border border-red-600">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon" class="icon-red">'+
    '                        <div class="feather-x-circle"></div>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});

// ANCHOR Warning alerts

$.notify.addStyle('warning', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-yellow-50 border-yellow-600 border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-yellow-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-yellow-600">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-yellow-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-yellow-600">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon icon-yellow">'+
    '                        <i class="feather-triangle"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-yellow-50 flex flex-row items-start w-full h-10 pl-3 pr-4 border border-yellow-600">'+
    '                <div data-notify-html="icon" class="alert-icon icon-yellow">'+
    '                <i class="feather-triangle"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-icon-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-yellow-50 pb-4 pl-4 pr-4 border border-yellow-600">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-yellow-50 flex flex-row pl-3 pr-4 py-3.5 border border-yellow-600">'+
    '                <div data-notify-html="icon" class="icon-yellow">'+
    '                    <div class="feather-triangle"></div>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('warning-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-yellow-50 flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border border-yellow-600">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('warning-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-yellow-50 flex flex-col space-y-2 border border-yellow-600">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon" class="icon-yellow">'+
    '                        <div class="feather-triangle"></div>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});

// ANCHOR Success alerts

$.notify.addStyle('success', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-green-50 border-green-400 border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-green-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-green-400">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-green-50 inline-flex items-center w-full h-10 pl-3 pr-4 border border-green-400">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon icon-green">'+
    '                        <i class="feather-check-circle"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-green-50 flex flex-row items-start w-full h-10 pl-3 pr-4 border border-green-400">'+
    '                <div data-notify-html="icon" class="alert-icon icon-green">'+
    '                <i class="feather-check-circle"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-html="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-icon-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-green-50 pb-4 pl-4 pr-4 border border-green-400">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-green-50 flex flex-row pl-3 pr-4 py-3.5 border border-green-400">'+
    '                <div data-notify-html="icon" class="icon-green">'+
    '                    <div class="feather-check-circle"></div>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('success-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-green-50 flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border border-green-400">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-html="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-html="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('success-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-green-50 flex flex-col space-y-2 border border-green-400">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon" class="icon-green">'+
    '                        <div class="feather-check-circle"></div>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-html="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-html="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <button class="btn-middle-ghost _ghost" data-notify-html="ghost">Dismiss</button>'+
    '                      <button class="btn-middle-primary _primary" data-notify-html="primary">Confirm</button>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});

// !SECTION

// SECTION Attatch alert to button

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

$("#basic-icon-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-book"></i>',
        body: 'This is the body of a basic alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'basic-icon-body-close',
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
        primary: 'Okay',
        ghost: 'Dimiss'
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
        primary: 'Okay',
        ghost: 'Dismiss'
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

$("#info-icon-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-info"></i>',
        body: 'This is the body of a info alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'info-icon-body-close',
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
        primary: 'Okay',
        ghost: 'Dimiss'
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
        primary: 'Okay',
        ghost: 'Dismiss'
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

$("#error-icon-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-x-circle"></i>',
        body: 'This is the body of a error alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'error-icon-body-close',
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
        primary: 'Okay',
        ghost: 'Dimiss'
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
        primary: 'Okay',
        ghost: 'Dismiss'
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

$("#warning-icon-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-triangle"></i>',
        body: 'This is the body of a warning alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'warning-icon-body-close',
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
        primary: 'Okay',
        ghost: 'Dimiss'
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
        primary: 'Okay',
        ghost: 'Dismiss'
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

$("#success-icon-body-close").click(function() {
    $.notify({
        title: 'This is a test',
        icon: '<i class="feather-check-circle"></i>',
        body: 'This is the body of a success alert. It can be really long or short. The alert height adjusts automatically',
        primary: '',
        ghost: ''
      }, { 
        style: 'success-icon-body-close',
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
        primary: 'Okay',
        ghost: 'Dimiss'
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
        primary: 'Okay',
        ghost: 'Dismiss'
      }, { 
        style: 'success-icon-body-buttons',
        autoHide: false,
        clickToHide: false,
        globalPosition: 'right bottom'
    });
});

// !SECTION

// SECTION Click events for alerts

//listen for click events from this style
$(document).on('click', 'div[class^="notifyjs"] ._ghost', function() {
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

$(document).on('click', 'div[class^="notifyjs"] ._primary', function() {
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