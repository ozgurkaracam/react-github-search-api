import React from 'react';
import ExampleChart from "./ExampleChart";
import {useGithubContext} from "../../context/Context";

function Charts(props) {

    const {repos}=useGithubContext()
    let data=repos.reduce((total,item)=>{
        const {language}=item
        if(language!=null){
            if(!total.hasOwnProperty(language)){
                total[language]=1
            }else{
                total[language]=total[language]+1
            }
        }
        return total
    },{})
    const mostUsageLanguages=Object.keys(data).map((key,index)=>{
        return {
            label:key,
            value:Object.values(data)[index]

        }
    })

    const mostForked=repos.sort((a,b)=>{
        return b.forks_count - a.forks_count
    }).slice(0,5).map(item=>({
        label:item.name,
        value:item.forks_count
    }))

    const mostPopular=repos.sort((a,b)=>{
        return b.stargazers_count - a.stargazers_count
    }).slice(0,5).map(item=>({
        label:item.name,
        value:item.stargazers_count
    }))


    data=repos.reduce((total,item)=>{
        const {language}=item
        if(language!=null){
            if(!total.hasOwnProperty(language)){
                total[language]=item.stargazers_count
            }else{
                total[language]=total[language]+item.stargazers_count
            }
        }
        return total
    },{})

    const starsPerLanguage=Object.keys(data).map((key,index)=>{
        return {
            label:key,
            value:Object.values(data)[index]
        }
    }).sort((a,b)=>{
        return b.value-a.value
    })



    return (
        <div className="my-5 md:grid grid-cols-2 gap-4">
            <ExampleChart chartData={mostUsageLanguages} tip="pie3d" descrip="Languages" xLabel="Language"  />
            <ExampleChart chartData={mostForked} tip="column3d" descrip="Most Forked Repos" xLabel="Repos" yLabel="Forks" />
            <ExampleChart chartData={starsPerLanguage} tip="column2d" descrip="Stars Per Language" xLabel="Language" yLabel="Stars" />
            <ExampleChart chartData={mostPopular} tip="column3d" descrip="Most Popular Repos" xLabel="Repos" yLabel="Stars" theme="candy" />
        </div>
    );
}

export default Charts;