const Time_service = (function () {

    const months = ['января' , 'февраля' , 'марта' , 'апреля' , 'мая' , 'июня' , 'июля' , 'августа' , 'сентября' , 'октября' , 'ноября' , 'декабря'];


    const dmmmmyyyy = function (time) {
        let date = new Date(time);



        let d = date.getDate();
        let mmmm = months[date.getMonth()];
        let yyyy = date.getFullYear();

        return `${d} ${mmmm} ${yyyy}`
    };

    return {
        dmmmmyyyy
    }

}())