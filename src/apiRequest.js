const apiRequest = async (url='', optionObj = null, errMsg = null) => {
    try{
        const response = await fetch(url, optionObj);
        if(!response) throw Error('Please relode the app')
    }
    catch (err) {
        errMsg = err.message;
    }
    finally{
        return errMsg
    }
}

export default apiRequest;