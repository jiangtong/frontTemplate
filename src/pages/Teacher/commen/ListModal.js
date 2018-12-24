import {request} from '@pages/Teacher/commen/request';

class ListModal {
    constructor(url) {
        this.url = url;
        this.pageSize = 10;
        this.pageNo = 1;
    }

    reloadData(data) {
        return request[this.url]({pageNum: this.pageNo, pageSize: this.pageSize, ...data});
    }

    editData(data) {

    }

    removeData(data) {

    }
}

export default ListModal;