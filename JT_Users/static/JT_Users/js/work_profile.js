import { job_categories,experience_levels } from "/static/js/data.js";

const job_category=document.getElementById("job-category");
const experience=document.getElementById("experience");
const submit_btn=document.getElementById("submit-btn");
const category_subs=document.getElementById("category-subs");
const c_values=document.getElementById("c-values");
const form=document.querySelector("form");

const categories_div=document.getElementById("selected-categories");
const sub_div=document.getElementById("selected-sub-categories");


const categories=Object.keys(job_categories);
let category_obj={}

// job categories
createCategories(job_category,categories);
createCategories(experience,experience_levels);

job_category.addEventListener("change",(e)=>{
    let cat_length=Object.keys(category_obj).length

    if (cat_length<3) {
        addSelectedValue(e.target.value,categories_div,"category");
        createSubSelect(category_subs,e.target.value,job_categories);
    }
})




submit_btn.addEventListener("click",()=>{
    c_values.value=JSON.stringify(category_obj);
    form.submit();
})





function createCategories(parent,list){
    list.forEach(element => {
        let opt=document.createElement("option");
        opt.value=element;
        opt.text=element;
        parent.appendChild(opt);
    });
}

function addSelectedValue(value,parent,type){
    let arr=Object.keys(category_obj)
    if (arr.includes(value)){
        return;
    }
    let p_div=document.createElement("div");
    let p=document.createElement("p");
    let span=document.createElement("span");
    let i=document.createElement("i");

    p_div.setAttribute("class","position-relative p-1 my-1 bg-secondary rounded");
    p.setAttribute("class","p-0 m-0 text-light")
    span.setAttribute("class","position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark py-2")
    i.setAttribute("class","bi bi-x-circle");
    
    p.textContent=value;
    span.appendChild(i);
    p_div.appendChild(span);
    p_div.appendChild(p);
    parent.appendChild(p_div);
    if (type=="category"){
        category_obj[value]=[]
    }
    span.addEventListener("click",(e)=>{
        parent.removeChild(p_div);
        delete category_obj[value]
        return
    })
}


function createSubSelect(parent,value,obj){
    let div=document.createElement("div");
    let label=document.createElement("label");
    let select=document.createElement("select");
    let values=obj[value];

    div.setAttribute("class","col");
    div.setAttribute("id",`${value.trim()}div`)
    label.setAttribute("class","form-label");
    label.setAttribute("for",`${value.trim()}`);

    label.textContent=`${value} Sub-Categories`

    select.setAttribute("id",`${value.trim()}`);
    select.setAttribute("class","form-select");
    select.setAttribute("name",`${value.trim()}`)
    values.forEach(value => {
        let opt=document.createElement("option");
        opt.value=value;
        opt.text=value;

        select.appendChild(opt);
    });

    select.addEventListener("change",(e)=>{
        addSelectedValue(e.target.value,sub_div,"sub-category");
        category_obj[value].push(e.target.value);
    })
    div.appendChild(label);
    div.appendChild(select)
    
    parent.appendChild(div);

}