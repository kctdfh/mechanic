idsOfSelectedRows = [];

function getFields() {
    var fields = [
        { FieldName: "Id", FieldDisplayName: "Id", FieldType: "Int32" },
        //{ FieldName: "AttributeName", FieldDisplayName: "Attribute Name", FieldType: "String" },
        //{ FieldName: "PartTerminologyCode", FieldDisplayName: "Part Term Code", FieldType: "Int32" },
        //{ FieldName: "AcaPartTermId", FieldDisplayName: "ACA Part Term Id", FieldType: "Int32" },
        //{ FieldName: "MetaFormat", FieldDisplayName: "Meta Format", FieldType: "String" },
        //{ FieldName: "DataType", FieldDisplayName: "Data Type", FieldType: "String" },
        //{ FieldName: "ValidValues", FieldDisplayName: "Valid Values", FieldType: "String" },
        //{ FieldName: "Uoms", FieldDisplayName: "Unit of Measures", FieldType: "String" },
        //{ FieldName: "Language", FieldDisplayName: "Language", FieldType: "String" },
        //{ FieldName: "CreateDate", FieldDisplayName: "Create Data", FieldType: "DateTime" },
        //{ FieldName: "TranslationRequired", FieldDisplayName: "Translation Required", FieldType: "Boolean" },
        //{ FieldName: "IsPublishable", FieldDisplayName: "Is Publishable", FieldType: "Boolean" },
        //{ FieldName: "IsSearchable", FieldDisplayName: "Is Searchable", FieldType: "Boolean" },
        //{ FieldName: "IsGlobal", FieldDisplayName: "Is Global", FieldType: "Boolean" },
        //{ FieldName: "ValueRequiredToPublish", FieldDisplayName: "Value Required To Publish", FieldType: "Boolean" },
        //{ FieldName: "AttributeDescription", FieldDisplayName: "Attribute Description", FieldType: "String" },
        //{ FieldName: "MaxLength", FieldDisplayName: "Max Length", FieldType: "Int32" },
        //{ FieldName: "AttributeId", FieldDisplayName: "Attribute Id", FieldType: "Int32" },
        //{ FieldName: "MetaDataId", FieldDisplayName: "Meta Data Id", FieldType: "Int32" },
        //{ FieldName: "LinkId", FieldDisplayName: "Link Id", FieldType: "Int32" },
        //{ FieldName: "PartTerminologyId", FieldDisplayName: "Part Terminology Id", FieldType: "Int32" }
    ];

    return fields;
}

function getGridModel() {
    var gridModel = [
        { name: "Id", label: "Id", hidden: true, formatter: "showlink", formatoptions: { baseLinkUrl: "#", idName: "?Id" } },
        { name: "AttributeName", label: "Attribute Name", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["cn", "nc", "eq", "ne", "bw", "bn", "in", "ni", "ew", "en", "nu", "nn"] }},
        { name: "PartTerminologyCode", label: "Part Term Code", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "AcaPartTermId", label: "ACA Part Term Id", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "MetaFormat", label: "Meta Format", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "DataType", label: "Data Type", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "ValidValues", label: "Valid Values", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "Uoms", label: "Unit of Measures", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] }},
        { name: "Language", label: "Language", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "CreateDate", label: "Create Data", sorttype: "date", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "TranslationRequired", label: "Translation Required", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "IsPublishable", label: "Is Publishable", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] }},
        { name: "IsSearchable", label: "Is Searchable", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "IsGlobal", label: "Is Global", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "ValueRequiredToPublish", label: "Value Required To Publish", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "AttributeDescription", label: "Attribute Description", sorttype: "text", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "MaxLength", label: "Max Length", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "AttributeId", label: "Attribute Id", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "MetaDataId", label: "Meta Data Id", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "LinkId", label: "Link Id", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] } },
        { name: "PartTerminologyId", label: "Part Terminology Id", sorttype: "number", search: true, searchoptions: { clearSearch: true, sopt: ["eq", "ne", "le", "lt", "gt", "ge"] }}
    ];

    return gridModel;
}

function getGridHeader() {
    var gridHeader = ["Id",
        "Attribute Name",
        "Part Term Code",
        "ACA Part Term Id",
        "Meta Format",
        "Data Type",
        "Valid Values",
        "Unit of Measures",
        "Language",
        "Create Data",
        "Translation Required",
        "Is Publishable",
        "Is Searchable",
        "Is Global",
        "Value Required To Publish",
        "Attribute Description",
        "Max Length",
        "Attribute Id",
        "Meta Data Id",
        "Link Id",
        "Part Terminology Id"
    ];
    return gridHeader;
}

function getGridData() {
    var data = [{   AcaPartTermId: 1036,
                    AttributeDescription: "desc EN",
                    AttributeId: 1,
                    AttributeName: "Test Attribute EN",
                    CreateDate: "0001-01-01T00:00:00",
                    DataType: "Numeric quantity, whole number",
                    Id: 1,
                    IsGlobal: true,
                    IsPublishable: false,
                    IsSearchable: false,
                    Language: "English",
                    LinkId: 1,
                    MaxLength: 11,
                    MetaDataId: 1,
                    MetaFormat: "ID11",
                    PartTerminologyCode: 1036,
                    PartTerminologyId: 4,
                    TranslationRequired: false,
                    Uoms: null,
                    ValidValues: "Attribute A",
                    ValueRequiredToPublish: false,
        _id_: "1"
    },
        {
            AcaPartTermId: 1340, AttributeDescription: "desc EN", AttributeId: 1, AttributeName: "Test Attribute EN", CreateDate: "0001-01-01T00:00:00",
            DataType: "Numeric quantity, whole number", Id: 6, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "English", LinkId: 2,
            MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PartTerminologyCode: 1340, PartTerminologyId: 20, TranslationRequired: false, Uoms: null,
            ValidValues: "Attribute A", ValueRequiredToPublish: false, _id_: "6"
        },
        {
            AcaPartTermId: 1376, AttributeDescription: "desc EN", AttributeId: 1, AttributeName: "Test Attribute EN", CreateDate: "0001-01-01T00:00:00",
            DataType: "Numeric quantity, whole number", Id: 11, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "English", LinkId: 3,
            MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PartTerminologyCode: 1376, PartTerminologyId: 25, TranslationRequired: false, Uoms: null,
            ValidValues: "Attribute A", ValueRequiredToPublish: false, _id_: "11"
        }
    ];
    return data;
}




function loadJqGrid() {

    //if (typeof gridPostData === 'undefined') {
    //    throw "Parameter is missing for jqgrid";
    //}

    gridHeader = getGridHeader();
    gridModel = getGridModel();
    canShowSubGrid = true;
    localData = getGridData();
    console.log("gridHeader: " + gridHeader.length);
    console.log("gridModel: " + gridModel.length);

    //if (canShowSubGrid === undefined) {
    //    canShowSubGrid = false;
    //}
    //if (canShowMultiSelect === undefined) {
    //    canShowMultiSelect = false;
    //}
    $('#jqGrid').jqGrid('GridUnload');

    appJqGrid = $("#jqGrid").jqGrid({
        data: localData,
        //datatype: "json",
        mtype: "post",
        colNames: gridHeader,
        colModel: gridModel,
        jsonReader: {
            root: "returnData",
            page: "currentPage",
            total: "totalPages",
            records: "totalRecords",
            repeatitems: false,
            id: "Id",
            userData: 'userData'
        },

        //postData: gridPostData,

        //onSelectRow: function (id, isSelected) {
        //    updateIdsOfSelectedRows(id, isSelected);
        //},
        onSelectAll: function (aRowids, isSelected) {
            requestAnimationFrame(function () {
                createSpinnerDiv("#gbox_jqGrid");
                setTimeout(function () { getAllIds(isSelected); }, 1);
            });
        },
        onSortCol: function () {
            //createSpinnerDiv("#jqGrid");
        },

        beforeRequest: function () {
            //createSpinnerDiv("#jqGrid");
        },

        gridComplete: function () {
            //removeSpinnerDiv();
        },

        loadComplete: function () {
            var $this = $(this), i, count;
            for (i = 0, count = idsOfSelectedRows.length; i < count; i++) {
                $this.jqGrid('setSelection', idsOfSelectedRows[i], false);
            }

            //if (hideEmptyColumns) {
            //    showHideColumns(true, gridModel, canShowMultiSelect);
            //}

            // call the function callback, if set
            if (typeof completed === "function") {

                if (completed.name == 'fixPager') {
                    completed("#jqGrid", "#divGrid");
                } else {
                    completed();
                }
            }

            // Check if loadGridCompleted is available then it will call loadGridCompleted
            if (typeof loadGridCompleted === "function") {
                loadGridCompleted();
            }


        },
        loadError: function (xhr, status, errMessage) {
            showJqGridError(xhr.status, status, errMessage);
        },
        loadonce: false,
        caption: "",
        loadui: "disable",
        pager: true,
        rowList: [20, 50, 100, 500],
        rownumbers: true,
        autoScroll: true,
        autowidth: false,
        shrinkToFit: false,
        sortable: true,
        viewrecords: true,
        gridview: true,
        autoencode: true,
        ignoreCase: true,
        rowNum: 20,
        page: 1,
        guiStyle: "pim2",
        iconSet: "feather",
        //sortname: lastSortName,
        //sortorder: lastSortOrder,
        multiselect: true,
        subGrid: true
    });	// JqGrid ends
}

loadSubGrid = function () {
    subGridHeader = getGridHeader();
    subGridModel = getGridModel();
    appJqGrid.jqGrid('setGridParam', {
        subGridRowExpanded: function (subgridId, rowId) {
            console.log(rowId);
            var gridData = getSubGridData(rowId);
            var subGridTableId;
            subGridTableId = subgridId + "_t";
            jQuery("#" + subgridId).html("<table id='" + subGridTableId + "' class='scroll'></table>");
            jQuery("#" + subGridTableId).jqGrid({
                data: gridData,
                //url: url + rowId,
                //datatype: "json",
                colNames: subGridHeader,
                colModel: subGridModel,
                //jsonReader: {
                //    root: "returnData",
                //    repeatitems: false
                //},
                height: '100%',
                rowNum: 20,
                sortname: 'Id',
                // ANCHOR set the iconSet option to "feather" 
                iconSet: "feather",
                guiStyle: "pim2",
                sortorder: "asc"
            });		// sub JqGrid ends
        }
        // subGridRowExpanded function ends.
    });	// appJqGrid
}; // loadSubGrid ends


function getSubGridData(rowId) {
    var data = [];
    switch (rowId)
    {
        case "jqg1":
            data = [{AcaAttributeId: 0, AcaPartTermId: 1036, AttributeDescription: "desc ES", AttributeId: 1, AttributeMultiLangId: 2,
                    AttributeName: "Test Attribute ES", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                    Id: 2, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Spanish", LanguageId: 2, LinkId: 1,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1036, PartTerminologyId: 4, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute B", ValueRequiredToPublish: false
                },
                {
                    AcaAttributeId: 0, AcaPartTermId: 1036, AttributeDescription: "desc LA", AttributeId: 1, AttributeMultiLangId: 3,
                    AttributeName: "Test Attribute LA", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                    Id: 3, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Latin", LanguageId: 3, LinkId: 1,
                    MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1036, PartTerminologyId: 4, Source: "PADB",
                    TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute C", ValueRequiredToPublish: false
                },
                {
                    AcaAttributeId: 0, AcaPartTermId: 1036, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 4,
                    AttributeName: "Test Attribute DE", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                    Id: 4, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "German", LanguageId: 1006, LinkId: 1,
                    MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1036, PartTerminologyId: 4, Source: "PADB",
                    TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute D", ValueRequiredToPublish: false
                }, {
                    AcaAttributeId: 0, AcaPartTermId: 1036, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 5,
                    AttributeName: "Test Attribute AB", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                    Id: 5, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Abkhazian", LanguageId: 1007, LinkId: 1,
                    MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1036, PartTerminologyId: 4, Source: "PADB",
                    TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute E", ValueRequiredToPublish: false}];
            break;
        case "jqg2":
            data = [{
                AcaAttributeId: 0, AcaPartTermId: 1340, AttributeDescription: "desc ES", AttributeId: 1, AttributeMultiLangId: 2,
                AttributeName: "Test Attribute ES", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 2, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Spanish", LanguageId: 2, LinkId: 2,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1340, PartTerminologyId: 20, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute B", ValueRequiredToPublish: false
            },
            {
                AcaAttributeId: 0, AcaPartTermId: 1340, AttributeDescription: "desc LA", AttributeId: 1, AttributeMultiLangId: 3,
                AttributeName: "Test Attribute LA", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 3, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Latin", LanguageId: 3, LinkId: 2,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1340, PartTerminologyId: 20, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute C", ValueRequiredToPublish: false
            },
            {
                AcaAttributeId: 0, AcaPartTermId: 1340, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 4,
                AttributeName: "Test Attribute DE", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 4, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "German", LanguageId: 1006, LinkId: 2,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1340, PartTerminologyId: 20, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute D", ValueRequiredToPublish: false
            }, {
                AcaAttributeId: 0, AcaPartTermId: 1340, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 5,
                AttributeName: "Test Attribute AB", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 5, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Abkhazian", LanguageId: 1007, LinkId: 2,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1340, PartTerminologyId: 20, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute E", ValueRequiredToPublish: false
            }];
            break;
        case "jqg3":
            data = [{
                AcaAttributeId: 0, AcaPartTermId: 1376, AttributeDescription: "desc ES", AttributeId: 1, AttributeMultiLangId: 2,
                AttributeName: "Test Attribute ES", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 2, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Spanish", LanguageId: 2, LinkId: 3,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1376, PartTerminologyId: 25, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute B", ValueRequiredToPublish: false
            },
            {
                AcaAttributeId: 0, AcaPartTermId: 1376, AttributeDescription: "desc LA", AttributeId: 1, AttributeMultiLangId: 3,
                AttributeName: "Test Attribute LA", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 3, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Latin", LanguageId: 3, LinkId: 3,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1376, PartTerminologyId: 25, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute C", ValueRequiredToPublish: false
            },
            {
                AcaAttributeId: 0, AcaPartTermId: 1376, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 4,
                AttributeName: "Test Attribute DE", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 4, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "German", LanguageId: 1006, LinkId: 3,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1376, PartTerminologyId: 25, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute D", ValueRequiredToPublish: false
            }, {
                AcaAttributeId: 0, AcaPartTermId: 1376, AttributeDescription: null, AttributeId: 1, AttributeMultiLangId: 5,
                AttributeName: "Test Attribute AB", CreateDate: "0001-01-01T00:00:00", DataType: "Numeric quantity, whole number", DataTypeId: 4,
                Id: 5, IsCustom: true, IsGlobal: true, IsPublishable: false, IsSearchable: false, Language: "Abkhazian", LanguageId: 1007, LinkId: 3,
                MaxLength: 11, MetaDataId: 1, MetaFormat: "ID11", PaptId: 0, PartTerminologyCode: 1376, PartTerminologyId: 25, Source: "PADB",
                TranslationRequired: false, UomGroupId: null, UomGroupName: null, Uoms: null, ValidValues: "Attribute E", ValueRequiredToPublish: false
            }];
            break;
        default:
            data = [];
            break;
    }

    return data;
}