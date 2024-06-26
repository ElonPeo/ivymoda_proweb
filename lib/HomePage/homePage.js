    // Lấy tất cả các phần tử có lớp .tickTypeBox và lưu vào biến tickBoxes
    const tickBoxes = document.querySelectorAll('.tickTypeBox');
    // Mảng chứa các cặp src cho các ảnh
    const imageSources = [
        {
            productIMG: "https://cotton4u.vn/files/product/thumab/400/2024/04/12/7453f9807d8bf411d9833bb1980993b4.webp",
            imgBoxAnimation: "https://cotton4u.vn/files/product/thumab/400/2024/04/12/725aa0022a86342058fe3fb95628e47d.webp"
        },
        {
            productIMG: "https://cotton4u.vn/files/product/thumab/400/2024/05/28/35e23f8357f438db151f49cc8244b025.webp",
            imgBoxAnimation: "https://cotton4u.vn/files/product/thumab/400/2024/05/28/16bcd8cf1d0f7890b73acd2968a28e77.webp"
        },
        {
            productIMG: "https://example.com/path/to/another/image1.webp",
            imgBoxAnimation: "https://example.com/path/to/another/image2.webp"
        },
        {
            productIMG: "https://example.com/path/to/another/image3.webp",
            imgBoxAnimation: "https://example.com/path/to/another/image4.webp"
        }
    ];
    // Lặp qua từng phần tử trong tickBoxes
    tickBoxes.forEach((box, index) => {
        // Thêm sự kiện click cho mỗi phần tử box
        box.addEventListener('click', () => {
            // Khi một box được click, lặp qua tất cả các tickBoxes
            tickBoxes.forEach(b => {
                // Lấy phần tử img con bên trong mỗi tickBox
                const img = b.querySelector('img');
                // Đặt thuộc tính hiển thị của ảnh thành 'none' để ẩn nó đi
                img.style.display = 'none';
            });

            // Lấy phần tử img con bên trong box được click
            const img = box.querySelector('img');
            // Đặt thuộc tính hiển thị của ảnh thành 'block' để hiển thị nó
            img.style.display = 'block';

            // In ra chỉ số của phần tử được click
            console.log(`Đang click vào ô thứ ${index + 1}`);

            // Thay đổi src của ảnh trong productIMGAnimationBox và imgBoxAnimation
            const productIMG = document.querySelector('.productIMGAnimationBox > img');
            const imgBoxAnim = document.querySelector('.imgBoxAnimation > img');
            productIMG.src = imageSources[index].productIMG;
            imgBoxAnim.src = imageSources[index].imgBoxAnimation;
        });
    });