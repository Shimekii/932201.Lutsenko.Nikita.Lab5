const newText ={
    1: "Новость 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.",
    2: "Новость 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.",
    3: "Новость 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium."
}

const Title = {
    1: "Новость 1",
    2: "Новость 2",
    3: "Новость 3"
}

const titleNews = document.getElementById('titleNews');
const openButtons = document.querySelectorAll('.openBtn');
const windowElement = document.getElementById('window');
const closeBtn = document.getElementById('closeBtn');
const newsText = document.getElementById('newsText');

openButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const newsId = button.closest('.news').getAttribute('data-id');
        newsText.innerText = newText[newsId];
        titleNews.innerText = Title[newsId];
        windowElement.classList.remove('hidden');
    });
});

const closeWindow = () => {
    windowElement.classList.add('hidden');
};

closeBtn.addEventListener('click', closeWindow);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeWindow();
    }
});

window.addEventListener('click', (event) => {
    if (event.target === windowElement) {
        closeWindow();
    }
});
