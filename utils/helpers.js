module.exports = {
  format_time: function (date) {
    return date.toLocaleTimeString();
  },
  format_date: function (date) {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
