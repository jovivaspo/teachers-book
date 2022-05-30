const getDate = (date) => {
   const dateNormalized ={
       year: new Date(date).getFullYear(),
       month: new Date(date).getUTCMonth() + 1 <10 ?  `0${new Date(date).getUTCMonth() + 1}` : new Date(date).getUTCMonth() + 1,
       day: new Date(date).getUTCDate(),
       normalized: function(){
           return `${this.day}/${this.month}/${this.year}`
       } 
   }

   return dateNormalized
}

export {getDate}