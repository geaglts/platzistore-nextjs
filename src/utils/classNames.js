function classNames(className = '', classes = []) {
    const copyOfClasses = [...classes];
    if (copyOfClasses.length > 0) {
        if (className.length > 0) {
            copyOfClasses.push(className);
        }
        return copyOfClasses.join(' ');
    }
    return className;
}

export default classNames;
