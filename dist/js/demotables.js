$(function () {
    "use strict";
    var mydata = [
            { id: "10",  invdate: "2007-10-01", name: "test test test test",   note: "note",   amount: "", tax: "", closed: true,  ship_via: "TN", total: "" },
            { id: "20",  invdate: "2007-09-01", name: "test18",  note: "note2",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
            { id: "30",  invdate: "2007-09-01", name: "test3",  note: "note3",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
            { id: "40",  invdate: "2007-10-04", name: "error",  note: "note4",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
            { id: "50",  invdate: "2007-10-31", name: "test12",  note: "note5",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
            { id: "60",  invdate: "2007-09-06", name: "test6",  note: "note6",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
            { id: "70",  invdate: "2007-10-04", name: "test7",  note: "note7",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
            { id: "80",  invdate: "2007-10-03", name: "selected",  note: "note8",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
            { id: "90",  invdate: "2007-09-01", name: "test9 test9 test9 test9 test9",  note: "note9",  amount: "400.00", tax: "30.00", closed: false, ship_via: "TN", total: "430.00" },
            { id: "100", invdate: "2007-09-08", name: "disabled", note: "note10", amount: "500.00", tax: "30.00", closed: true,  ship_via: "TN", total: "530.00" },
            { id: "110", invdate: "2007-09-08", name: "test11", note: "note11", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" },
            { id: "120", invdate: "2007-09-10", name: "test12", note: "note12", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" }
        ],
        $grid = $("#pim2"),
        initDateEdit = function (elem) {
            $(elem).datepicker({
                dateFormat: "dd-M-yy",
                autoSize: true,
                changeYear: true,
                changeMonth: true,
                showButtonPanel: true,
                showWeek: true
            });
        },
        initDateSearch = function (elem) {
            setTimeout(function () {
                initDateEdit(elem);
            }, 100);
        };

    $grid.jqGrid({
        data: mydata,
        colNames: ["", "Client", "Date", "Amount", "Tax", "Total", "Closed", "Shipped via", "Notes"],
        colModel: [
            { name: "act", template: "actions", width: 75 },
            { name: "name", align: "center", width: 96, editrules: {required: true},
                searchoptions: { sopt: ["cn", "bw", "ew", "eq", "bn", "nc", "en"] } },
            { name: "invdate", width: 72, align: "center", sorttype: "date", frozen: true,
                formatter: "date", formatoptions: { newformat: "d-M-Y" }, datefmt: "d-M-Y",
                editoptions: { dataInit: initDateEdit },
                searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"], dataInit: initDateSearch } },
            { name: "amount", width: 64, template: "number" },
            { name: "tax", width: 41, template: "number", autoResizableMinColSize: 40 },
            { name: "total", width: 50, template: "number" },
            { name: "closed", width: 57, template: "booleanCheckbox", firstsortorder: "desc" },
            { name: "ship_via", width: 85, align: "center", formatter: "select",
                edittype: "select", editoptions: { value: "FE:FedEx;TN:TNT;IN:Intim", defaultValue: "IN" },
                stype: "select", searchoptions: { sopt: ["eq", "ne"], value: ":Any;FE:FedEx;TN:TNT;IN:IN" } },
            { name: "note", width: 43, edittype: "textarea", sortable: false }
        ],
        cmTemplate: { autoResizable: true, editable: true },
        rowattr: function (rd) {
            if (rd.name === "disabled") {
                return {"class": "disabledState"};
            } else if (rd.name === "error") {
                return {"class": "errorState"}
            }
        },
        guiStyle: "pim2",
        iconSet: "feather",
        rowNum: 10,
        autoResizing: { compact: true },
        rowList: [5, 10, 20, "10000:All"],
        viewrecords: true,
        // autowidth: true,
        autoencode: true,
        sortable: true,
        selarrrow: ["80"],
        pager: true,
        rownumbers: true,
        sortname: "invdate",
        sortorder: "desc",
        multiselect: true,
        multiPageSelection: true,
        //reloadGridOptions: { current: true },
        inlineEditing: { keys: true },
        navOptions: { add: true, edit: true, del: true, search: true },
        searching: { searchOnEnter: false, searchOperators: true },
        caption: "'pim2' guiStyle with 'feather' iconSet"
    }).jqGrid("navGrid")
    .jqGrid("filterToolbar")
    .jqGrid("gridResize");
});

$(function () {
            "use strict";
            var mydata = [
                    { id: "10",  invdate: "2007-10-01", name: "test",   note: "note",   amount: "", tax: "", closed: true,  ship_via: "TN", total: "" },
                    { id: "20",  invdate: "2007-09-01", name: "test2",  note: "note2",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                    { id: "30",  invdate: "2007-09-01", name: "test3",  note: "note3",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
                    { id: "40",  invdate: "2007-10-04", name: "test4 test4 test4",  note: "note4",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
                    { id: "50",  invdate: "2007-10-31", name: "test5",  note: "note5",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                    { id: "60",  invdate: "2007-09-06", name: "test6",  note: "note6",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
                    { id: "70",  invdate: "2007-10-04", name: "test7",  note: "note7",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
                    { id: "80",  invdate: "2007-10-03", name: "test8",  note: "note8",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                    { id: "90",  invdate: "2007-09-01", name: "test9 test9 test9 test9 test9",  note: "note9",  amount: "400.00", tax: "30.00", closed: false, ship_via: "TN", total: "430.00" },
                    { id: "100", invdate: "2007-09-08", name: "test10", note: "note10", amount: "500.00", tax: "30.00", closed: true,  ship_via: "TN", total: "530.00" },
                    { id: "110", invdate: "2007-09-08", name: "test11", note: "note11", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" },
                    { id: "120", invdate: "2007-09-10", name: "test12", note: "note12", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" }
                ],
                $grid = $("#middle"),
                initDateEdit = function (elem) {
                    $(elem).datepicker({
                        dateFormat: "dd-M-yy",
                        autoSize: true,
                        changeYear: true,
                        changeMonth: true,
                        showButtonPanel: true,
                        showWeek: true
                    });
                },
                initDateSearch = function (elem) {
                    setTimeout(function () {
                        initDateEdit(elem);
                    }, 100);
                };
    
            $grid.jqGrid({
                data: mydata,
                colNames: ["", "Client", "Date", "Amount", "Tax", "Total", "Closed", "Shipped via", "Notes"],
                colModel: [
                    { name: "act", template: "actions" },
                    { name: "name", align: "center", width: 96, editrules: {required: true},
                        searchoptions: { sopt: ["cn", "bw", "ew", "eq", "bn", "nc", "en"] } },
                    { name: "invdate", width: 72, align: "center", sorttype: "date", frozen: true,
                        formatter: "date", formatoptions: { newformat: "d-M-Y" }, datefmt: "d-M-Y",
                        editoptions: { dataInit: initDateEdit },
                        searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"], dataInit: initDateSearch } },
                    { name: "amount", width: 64, template: "number" },
                    { name: "tax", width: 41, template: "number", autoResizableMinColSize: 40 },
                    { name: "total", width: 50, template: "number" },
                    { name: "closed", width: 57, template: "booleanCheckboxFa", firstsortorder: "desc" },
                    { name: "ship_via", width: 85, align: "center", formatter: "select",
                        edittype: "select", editoptions: { value: "FE:FedEx;TN:TNT;IN:Intim", defaultValue: "IN" },
                        stype: "select", searchoptions: { sopt: ["eq", "ne"], value: ":Any;FE:FedEx;TN:TNT;IN:IN" } },
                    { name: "note", width: 43, edittype: "textarea", sortable: false }
                ],
                cmTemplate: { autoResizable: true, editable: true },
                iconSet: "feather",
                guiStyle: "middle",
                rowNum: 10,
                autoResizing: { compact: true },
                rowList: [5, 10, 20, "10000:All"],
                viewrecords: true,
                autoencode: true,
                sortable: true,
                pager: true,
                rownumbers: true,
                sortname: "invdate",
                sortorder: "desc",
                multiselect: true,
                multiPageSelection: true,
                //reloadGridOptions: { current: true },
                inlineEditing: { keys: true },
                navOptions: { add: false, edit: false, del: false, search: false },
                searching: { searchOnEnter: false, searchOperators: true },
            }).jqGrid("navGrid")
            .jqGrid("filterToolbar")
            .jqGrid("gridResize");
});


$(function () {
        "use strict";
        var mydata = [
                { id: "10",  invdate: "2007-10-01", name: "test",   note: "note",   amount: "", tax: "", closed: true,  ship_via: "TN", total: "" },
                { id: "20",  invdate: "2007-09-01", name: "test2",  note: "note2",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                { id: "30",  invdate: "2007-09-01", name: "test3",  note: "note3",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
                { id: "40",  invdate: "2007-10-04", name: "test4 test4 test4",  note: "note4",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
                { id: "50",  invdate: "2007-10-31", name: "test5",  note: "note5",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                { id: "60",  invdate: "2007-09-06", name: "test6",  note: "note6",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
                { id: "70",  invdate: "2007-10-04", name: "test7",  note: "note7",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
                { id: "80",  invdate: "2007-10-03", name: "test8",  note: "note8",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
                { id: "90",  invdate: "2007-09-01", name: "test9 test9 test9 test9 test9",  note: "note9",  amount: "400.00", tax: "30.00", closed: false, ship_via: "TN", total: "430.00" },
                { id: "100", invdate: "2007-09-08", name: "test10", note: "note10", amount: "500.00", tax: "30.00", closed: true,  ship_via: "TN", total: "530.00" },
                { id: "110", invdate: "2007-09-08", name: "test11", note: "note11", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" },
                { id: "120", invdate: "2007-09-10", name: "test12", note: "note12", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" }
            ],
            $grid = $("#small"),
            initDateEdit = function (elem) {
                $(elem).datepicker({
                    dateFormat: "dd-M-yy",
                    autoSize: true,
                    changeYear: true,
                    changeMonth: true,
                    showButtonPanel: true,
                    showWeek: true
                });
            },
            initDateSearch = function (elem) {
                setTimeout(function () {
                    initDateEdit(elem);
                }, 100);
            };

        $grid.jqGrid({
            data: mydata,
            colNames: ["", "Client", "Date", "Amount", "Tax", "Total", "Closed", "Shipped via", "Notes"],
            colModel: [
                { name: "act", template: "actions" },
                { name: "name", align: "center", width: 96, editrules: {required: true},
                    searchoptions: { sopt: ["cn", "bw", "ew", "eq", "bn", "nc", "en"] } },
                { name: "invdate", width: 72, align: "center", sorttype: "date", frozen: true,
                    formatter: "date", formatoptions: { newformat: "d-M-Y" }, datefmt: "d-M-Y",
                    editoptions: { dataInit: initDateEdit },
                    searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"], dataInit: initDateSearch } },
                { name: "amount", width: 64, template: "number" },
                { name: "tax", width: 41, template: "number", autoResizableMinColSize: 40 },
                { name: "total", width: 50, template: "number" },
                { name: "closed", width: 57, template: "booleanCheckboxFa", firstsortorder: "desc" },
                { name: "ship_via", width: 85, align: "center", formatter: "select",
                    edittype: "select", editoptions: { value: "FE:FedEx;TN:TNT;IN:Intim", defaultValue: "IN" },
                    stype: "select", searchoptions: { sopt: ["eq", "ne"], value: ":Any;FE:FedEx;TN:TNT;IN:IN" } },
                { name: "note", width: 43, edittype: "textarea", sortable: false }
            ],
            cmTemplate: { autoResizable: true, editable: true },
            iconSet: "feather",
            guiStyle: "small",
            rowNum: 10,
            autoResizing: { compact: true },
            rowList: [5, 10, 20, "10000:All"],
            viewrecords: true,
            autoencode: true,
            sortable: true,
            pager: true,
            rownumbers: true,
            sortname: "invdate",
            sortorder: "desc",
            multiselect: true,
            multiPageSelection: true,
            //reloadGridOptions: { current: true },
            inlineEditing: { keys: true },
            navOptions: { add: false, edit: false, del: false, search: false },
            searching: { searchOnEnter: false, searchOperators: true },
        }).jqGrid("navGrid")
        .jqGrid("filterToolbar")
        .jqGrid("gridResize");
});

