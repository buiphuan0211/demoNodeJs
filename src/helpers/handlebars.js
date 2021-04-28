module.exports = {
    sum: (a, b) => a + b,
    sortTable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";
        const icons = {
            default: "fas fa-sort",
            desc: "fa fa-angle-double-down",
            asc: "fa fa-angle-double-up",
        };
        const types = {
            default: "desc",
            desc: "asc",
            asc: "desc",
        };
        const icon = icons[sortType];
        const type = types[sortType];
        return ` <a href="?_sort&column=${field}&type=${type}"> <i class="${icon}"></i></a>`;
    },
};
