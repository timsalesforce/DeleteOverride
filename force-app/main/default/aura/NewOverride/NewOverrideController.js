({
    handleOnSuccess : function(component, event, helper) {
        var recordId = event.getParam("response").id;
        var navService = component.find("navService");
        var pageReference = {
            type: "standard__recordPage",
            attributes: {
                objectApiName: "Contact",
                recordId: recordId,
                actionName: "view"
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
    }
})
