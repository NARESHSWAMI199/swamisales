

export default updateObject(oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}