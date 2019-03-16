const comments_ui_module = (function () {


    const comments_list = document.querySelector('.comment_body');

    const time_service = Time_service;


    let comment_template = function (comment) {
        return `
             <div class="comment-item">
                    <div class="row">
                        <div class="col-12 d-flex">
                            <p class="comment-item_name mr-4">
                                ${comment.name}
                            </p>
                            <!-- /.comment-item_name -->
                            <p class="comment-item_date">
                            ${time_service.dmmmmyyyy(comment.date)}
                            </p>
                            <!-- /.comment-item_date -->
                        </div>
                        <!-- /.col -->

                        <div class="col-12">
                            <p class="comment-item_text">
                                <span class="triangle"></span>
                                ${comment.text}
                            </p>
                            <!-- /.comment-item-text -->
                        </div>
                        <!-- /.col-12 -->
                    </div>
                    <!-- /.row -->
                </div>
        
        `
    };

    const addComment = function (comment) {
        comments_list.insertAdjacentHTML('afterbegin', comment_template(comment))
    };


    return {
        addComment
    }

}());