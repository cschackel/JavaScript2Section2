var app = new Vue(
    {
        el:'#app',
        data:
            {
                colleges:[],
                searchTerm: '',
                //test..term:'200',
                searchCriteria:{},
                favorites:[],
                searchResults:[],
                navDrawer:false,
                drawer:false,
                popup:false,
            },
        methods:
            {
                runSearchByName:function()
                {
                    let url='https://api.data.gov/ed/collegescorecard/v1/schools.json';
                    /*
                    let searchConfig={
                        params:{
                        api_key:'XQHmxO9yBc6WFdk3bsRvtIzfyyiS7ZzFWkqtAUTI',
                        //_fields:'school.name&school.state',

                        _fields:'school.name,' +  //Name of College
                            'school.city,' +  //City
                            'school.state,' +  //State
                            'school.zip,' +  //Zip Code
                            'school.school_url,' +  //Homepage URL
                            'latest.cost.attendance.academic_year,' +  //Cost per Academic Year
                            'school.degrees_awarded.predominant,' +  //Type of Degrees (1/2/3/4 Year)
                            //'institutional_characteristics.level,' +  //Type of College (1=4 Year, 2=2Year, 3=<2 Year)
                            'school.locale,' +  //General Population Density
                            'location.lat,' +  //Latitude
                            'location.lon,' +  //Longitude
                            'latest.aid.median_debt.completers.overall,' +  //Median Debt
                            'latest.student.demographics.age_entry,' + //Avg Age
                            'latest.student.demographics.unemployment',


                        school:{name: this.searchTerm},

                         //Complete Line
                        //school.name,school.city,school.state,school.zip,school.school_url,latest.cost.attendance.academic_year,school.degrees_awarded.predominant,school.locale,location.lat,location.lon,latest.cost.attendance.program_year,latest.aid.median_debt.completers.overall,latest.student.demographics.age_entry,latest.student.demographics.unemployment,school.institutional_characteristics.level
                    }};
                    */
                    let searchFields='school.name,school.city,school.state,school.zip,school.school_url,latest.cost.attendance.academic_year,school.degrees_awarded.predominant,school.locale,location.lat,location.lon,latest.cost.attendance.program_year,latest.aid.median_debt.completers.overall,latest.student.demographics.age_entry,latest.student.demographics.unemployment,school.institutional_characteristics.level,latest.admissions.admission_rate.overall,latest.student.enrollment.all';
                    url += '?api_key=XQHmxO9yBc6WFdk3bsRvtIzfyyiS7ZzFWkqtAUTI&_fields=' + searchFields + '&school.name=' + this.searchTerm;

                    //alert(this.searchTerm);
                    //alert(url);
                    this.$http.get(url)
                        .then(function(response){
                            //alert("Responce");
                            //console.log(response);
                            if(response.data.results.length > 0){
                                //alert("Yes");
                                this.searchResults = response.data.results;

                                console.log("city",this.searchResults[0]["school.city"]);
                                //console.log(this.searchResults[0].get(school.name));
                            }
                        })
                        .catch(function(error){
                            console.error('ERROR', error);
                        });
                },
                getCollegeImg:function(domain)
                {
                    let url='https://logo.clearbit.com/'+domain;
                    this.$http.get(url).then(function(responce)
                    {
                        return responce;
                    }).catch(function()
                    {
                        // ADD A FALLBACK
                    });

                },


            }
    }
);