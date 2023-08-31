const express = require('express');
const path = require('path');
const { Campground } = require(path.join(__dirname, './models/campground'));
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    if (req.query._method) {
        req.method = req.query._method;
    }
    next();
});



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/campgrounds', { campgrounds });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/createCampgrounds');
});

app.get('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/details', { campground });
});

app.post('/campgrounds', async (req, res) => {

    const { title, location } = req.body;
    await Campground({
        title, location
    }).save();
    res.redirect('/campgrounds');
});

app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
})

app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const { title, location } = req.body;
    const campground = await Campground.findByIdAndUpdate(id, { title, location });
    res.redirect(`/campgrounds/${campground._id}`)
});

app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

app.listen(8080, () => {
    console.log('server started on port 8080!');
})