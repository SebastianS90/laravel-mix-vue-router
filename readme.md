# Demo repository for an issue in laravel-mix
This repository reproduces issue [JeffreyWay/laravel-mix#164](https://github.com/JeffreyWay/laravel-mix/issues/164).
My fix was accepted in PR [#209](https://github.com/JeffreyWay/laravel-mix/pull/209), but there are [reports](https://github.com/JeffreyWay/laravel-mix/issues/164#issuecomment-315596718) that the issue occured again in a later version.
There is also a [new issue](https://github.com/JeffreyWay/laravel-mix/issues/863) for it.

# Get it running
- `git clone https://github.com/SebastianS90/laravel-mix-vue-router.git`
- `cd laravel-mix-vue-router`
- `composer install`
- `cp .env.example .env`
- `php artisan key:generate`
- `npm install`
- `npm run dev`
- `php artisan serve`

# Try it out
- Visit [http://localhost:8080/](http://localhost:8080/) and try clicking all three links
- Visit [http://localhost:8080/foo](http://localhost:8080/foo) and try clicking all three links
- Visit [http://localhost:8080/foo/bar](http://localhost:8080/foo/bar) and try clicking all three links
- Try these steps also with `npm run hot`
