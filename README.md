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

