Vue.component('college_card',
    {
            data: function () {
                    return {
                            collegePage:false,
                            imgURL:"",
                            favorite:false,
                    }
            },
        props:{college:{type:Object,required:true}},
        template:'<v-card hover v-on:click="openCollegePage">\n' +
            '                <v-card-title><h1>{{college["school.name"]}}</h1></v-card-title>\n' +
            '                <v-card-media ><v-img :src="imgURL"></v-img></v-card-media>\n' +
            '                <v-card-text>\n' +
            '                    <v-list two-line subheader blue dense>\n' +
            '                        <v-subheader><h2>Quick Stats:</h2></v-subheader>\n' +
            '                        <v-list-tile>\n' +
            '                            <v-list-tile-content>\n' +
            '                                <v-list-tile-title><h3>Location:</h3></v-list-tile-title>\n' +
            '                                <v-list-tile-sub-title><h4>{{college["school.city"]}}, {{college["school.state"]}}</h4></v-list-tile-sub-title>\n' +
            '                            </v-list-tile-content>\n' +
            '                        </v-list-tile>\n' +
            '                        <v-list-tile>\n' +
            '                            <v-list-tile-content>\n' +
            '                                <v-list-tile-title><h3>Population:</h3></v-list-tile-title>\n' +
            '                                <v-list-tile-sub-title><h4>{{college["latest.student.enrollment.all"]}}</h4></v-list-tile-sub-title>\n' +
            '                            </v-list-tile-content>\n' +
            '                        </v-list-tile>\n' +
            '                        <v-list-tile>\n' +
            '                            <v-list-tile-content>\n' +
            '                                <v-list-tile-title><h3>Average Cost Per Year:</h3></v-list-tile-title>\n' +
            '                                <v-list-tile-sub-title><h4>${{college["latest.cost.attendance.academic_year"]}}</h4></v-list-tile-sub-title>\n' +
            '                            </v-list-tile-content>\n' +
            '                        </v-list-tile>\n' +
            '                    </v-list>\n' +
            '                </v-card-text>\n' +
            '                <v-card-actions><v-btn fab flat small><v-icon v-bind:color="favIconColor" @click="toggleFavorite">star</v-icon></v-btn><v-btn fab flat small><v-icon>info</v-icon></v-btn></v-card-actions>\n' +
            '' +
            '            </v-card>',
        methods:{
                getImg:function()
                {
                        try
                        {
                                this.imgURL="//logo.clearbit.com/" + this.college["school.school_url"];
                        }
                        catch
                        {
                                this.imgURL="FAILURE";
                        }

                },
                toggleFavorite:function()
                {
                    this.$emit('toggleFav');
                    this.favorite=!this.favorite;
                },
                openCollegePage:function()
                {
                        this.collegePage=true;
                },
        },
            computed:
                {
                       favIconColor:function()
                       {
                               return this.favorite?'yellow':'black';
                       }
                },
        created:function()
        {
                this.getImg();
        },
    });