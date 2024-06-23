export const BASE_API_URL = 'http://127.0.0.1:5000';
export const PUBLIC_URL = '../../public';
export const getTime = (CURRENT_DATE) => {
    const AVAILABLE_DATE = new Date(CURRENT_DATE);
    return AVAILABLE_DATE.getTime()
}

export const getDate = (CURRENT_DATE) => {
    const AVAILABLE_DATE = new Date(CURRENT_DATE);
    return AVAILABLE_DATE.getDate()
}

export const formatDate = (CURRENT_DATE) => {
    const newDate = new Date(CURRENT_DATE)
    const formattedDate = newDate.toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    const formattedTime = newDate.toLocaleTimeString('it-IT', { hour: "2-digit", minute: "2-digit" })

    const fullDate = `${formattedDate} - ${formattedTime}`

    return fullDate
}

export const formatCurrency = (CURRENT_NOMINAL, locale, currency) => {
    const newData = CURRENT_NOMINAL.toLocaleString(locale, {style:"currency", currency:currency})
    return newData
}