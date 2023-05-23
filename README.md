## CSS
- `columns`: CSS Multiple Columns, thuộc tính css dùng để xác định nhiều cột cho văn bản

```
text 1  | text 4  | text 7
text 2  | text 5  | text 8
text 3  | text 6  | text 9
```

```css
columns: 100px 3; /* width tối thiểu là 100px, chia 3 cột */
```
## Fetching data images gallery by API
- Đăng ký API key trên `pexels.com`
- Dùng `fetch` gọi API
- Có `data` `innerHTML` vào layout

## Load more API
- Tăng `currentPage` lên 1 -> Gọi API với `currentPage` đó
- Khi đang gọi API thì `disabled` nút loadmore, gọi xong có `respon` thì trả lại

## Search API
- Bấm search
  + `imageWrapper.innerHTML = ""` cho về rỗng
  + chuyển `currentPage` về 1
  + call API với `searchTerm` tương ứng
- Xử lý search + loadmore
  + Khi bấm __loadmore__
    + Nếu có `searchTerm` -> call API __search__ với `currentPage++`
    + else call API __loadmore__ mặc định
- Nếu không nhập gì vào input search
  + `return searchTerm = null` -> thoát hàm call API search

## Downloading image

- call API với địa chỉ hình
- nhận được `respon` -> chuyển `img` đã nhận thành `blob`, tạo liên kết tải xuống và tải xuống

## Lightbox
- show lightbox lên, và đóng lightbox lại
- Lấy hình và name của hình được click hiển thị vào trong Lightbox

### Download image from Lightbox
- Thêm thuộc tính tùy chỉnh `data-*` cho element `button` HTML -> Lấy src của image -> `data-name=src_image`
- Khi click button -> target đến thuộc tính `dataset` truy cập vào `name` -> lấy được `src_image` -> gọi hàm `downloadImg` 
