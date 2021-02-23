// convert html to javascript string --> http://pojo.sodhanalibrary.com/string.html

$.notify.addStyle('title', {
    html: '<div style="width:24rem">'+
    '            <div class="items-start w-full py-2.5 px-4 bg-border border h-10">'+
    '                <p class="flex-grow-1 text-md mx-auto font-semibold text-black align-middle" data-notify-text="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('title-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-border inline-flex items-center w-full h-10 pl-3 pr-4 border">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <p class="flex-grow-1 text-md font-semibold text-black" data-notify-text="title">'+
    '                        Alert title'+
    '                    </p>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>',    
});

$.notify.addStyle('title-icon-close', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-border inline-flex items-center w-full h-10 pl-3 pr-4 border">'+
    '                <div class="flex items-center justify-between w-full h-full">'+
    '                    <div class="flex flex-row space-x-2">'+
    '                        <div data-notify-html="icon" class="alert-icon">'+
    '                            <i class="feather-info"></i>'+
    '                        </div>'+
    '                        <p class="flex-grow-1 text-md my-auto font-semibold text-black" data-notify-text="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('title-icon', {
    html: '<div style="width:24rem">'+
    '            <div'+
    '                class="justify-items-center bg-border flex flex-row items-start w-full h-10 pl-3 pr-4 border">'+
    '                <div data-notify-html="icon" class="alert-icon">'+
    '                    <i class="feather-info"></i>'+
    '                </div>'+
    '                <p class="flex-grow-1 text-md my-auto ml-2 font-semibold text-black align-middle" data-notify-text="title">'+
    '                    Alert title'+
    '                </p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('title-body-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-border pb-4 pl-4 pr-4 border">'+
    '                <div class="justify-items-center inline-flex items-center w-full h-10">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-text="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-text="body">Use when you need a persistent static container which is closable by user'+
    '                    actions or other cases.</p>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('title-icon-body', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-border flex flex-row pl-3 pr-4 py-3.5 border">'+
    '                <div data-notify-html="icon">'+
    '                    <i class="feather-info"></i>'+
    '                </div>'+
    '                <div class="ml-2.5 items-start w-full">'+
    '                    <div class="">'+
    '                        <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-text="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                    </div>'+
    '                    <p class="text-md text-black" data-notify-text="body">Use when you need a persistent static container which is closable by'+
    '                        user actions or other cases.</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'    
});

$.notify.addStyle('title-body-buttons-close', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-border flex flex-col w-full pt-4 pl-4 pr-4 space-y-2 border">'+
    '                <div'+
    '                    class="justify-items-center inline-flex items-center">'+
    '                    <div class="flex items-center justify-between w-full h-full">'+
    '                        <p class="flex-grow-1 text-md font-semibold text-black" data-notify-text="title">'+
    '                            Alert title'+
    '                        </p>'+
    '                        <button class="_close focus:outline-none focus-visible:outline-black feather-x hover:text-blue-500 ml-4 text-black cursor-pointer"></button>'+
    '                    </div>'+
    '                </div>'+
    '                <p class="text-md text-black" data-notify-text="body">Aute mollit esse est elit elit ad ut fugiat pariatur aute dolore. Adipisicing deserunt in tempor cupidatat reprehenderit sit ad duis do.</p>'+
    '                <div class="relative h-12">'+
    '                    <div class="absolute right-0 flex flex-row justify-end h-full space-x-3">'+
    '                      <div  data-notify-html="ghost"><button class="btn middle ghost _dismiss">Dismiss</button></div>'+
    '                      <div  data-notify-html="primary"><button class="btn middle primary _confirm">Confirm</button></div>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        '+
    '        '+
    '        </div>'    
});

$.notify.addStyle('title-icon-body-buttons', {
    html: '<div style="width:24rem">'+
    '            <div class="bg-border flex flex-col space-y-2 border">'+
    '                <div class="relative flex flex-row pl-3.5 pr-4 py-3.5 ">'+
    '                    <div data-notify-html="icon">'+
    '                        <i class="feather-info"></i>'+
    '                    </div>'+
    '                    <div class="ml-2.5 items-start w-full">'+
    '                        <div class="">'+
    '                            <p class="flex-grow-1 text-md mb-1.5 font-semibold text-black align-middle" data-notify-text="title">'+
    '                                Alert title'+
    '                            </p>'+
    '                        </div>'+
    '                        <p class="text-md text-black" data-notify-text="body">Use when you need a persistent static container which is closable by'+
    '                            user actions or other cases.</p>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="h-12 px-4">'+
    '                    <div class="flex flex-row justify-end h-full space-x-3">'+
    '                      <div  data-notify-html="ghost"><button class="btn middle ghost _dismiss">Dismiss</button></div>'+
    '                      <div  data-notify-html="primary"><button class="btn middle primary _confirm">Confirm</button></div>'+
    '                    </div>'+
    '                  </div>'+
    '            </div>'+
    '        </div>'    
});