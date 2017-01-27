<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <ul>
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/foo">foo</router-link></li>
                    <li><router-link to="/foo/bar">foobar</router-link></li>
                </ul>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
