import { Link } from 'gatsby'
import React from 'react'
import './style.scss'








const NutritionAdditives = (props) =>(
  
    <div className="nutritionLabel">
    
        <div className="title">
            Besin İlaveleri
        </div>
    
        <div className="serving">
            <div className="cf">
                <div className="servingSizeText fl">
                    1 kg mama için değerler
                </div>
    
                <div className="servingUnitQuantity fl">
                   
                </div>
            </div>
        </div>
    
        <div className="bar1"></div>
    
        
    
        <div className="line">
            <div className="fr">
               {props.energy}kcal
            </div>
    
            <div>
                <b>Enerji</b>
            </div>
        </div>
    
        <div className="bar2"></div>
    
       
        {(props.additives.copperSulfate !==null || props.additives.zincSulphate !==null ||
        props.additives.zincShelate !==null || props.additives.manganeseSulphate !==null) &&(
        <div className="line">
            <div className="dv">
                <b></b>
            </div><b>Mineraller</b>
        </div>)}
    
        {props.additives.copperSulfate !==null && (
        <div className="line indent">
            <div className="dv">
                {props.additives.copperSulfate}
            </div>Bakır sulfat olarak
        </div>)}
    
        {props.additives.zincSulphate !==null && (
        <div className="line indent">
            <div className="dv">
                {props.additives.zincSulphate}
            </div>Çinko sulfat olarak
        </div>)}
        {props.additives.zincShelate !==null && (
        <div className="line indent">
            <div className="dv">
                {props.additives.zincShelate}
            </div>Çinko şelat olarak
        </div>)}
        {props.additives.manganeseSulphate !==null && (
        <div className="line indent">
            <div className="dv">
                {props.additives.manganeseSulphate}
            </div>Manganez sulfat olarak
        </div>)}
        
       
        {props.additives.selenyum !==null && (
        <div className="line">
            <div className="dv">
               {props.additives.selenyum}
            </div><b>Selenyum</b>
        </div>)}
        {props.additives.kondroitin !==null && (
        <div className="line">
            <div className="dv">
                {props.additives.kondroitin}
            </div><b>Kondroitin</b>
        </div>)}
        
        {props.additives.taurine !==null && (
        <div className="line">
            <div className="dv">
                {props.additives.taurine}
            </div><b>Taurin</b>
        </div>)}
        {props.additives.niyasin !==null && (
        <div className="line">
            <div className="dv">
                {props.additives.niyasin}
            </div><b>Niyasin</b>
        </div>)}
        {props.additives.glukozamin !==null && (
        <div className="line">
            <div className="dv">
                {props.additives.glukozamin}
            </div><b>Glukozamin</b>
        </div>)}
    
        <div className="bar1"></div>
        {props.additives.vitaminD3 !== null && (
        <div className="line vitaminA">
            <div className="dv">
                {props.additives.vitaminD3}
            </div>Vitamin D3
        </div>)}
    
       {props.additives.vitaminA !== null && (
        <div className="line vitaminC">
            <div className="dv">
                {props.additives.vitaminA}
            </div>Vitamin A
        </div> )}
        {props.additives.vitaminE !== null && (
        <div className="line vitaminA">
            <div className="dv">
               {props.additives.vitaminE}
            </div>Vitamin E
        </div>)}
        {props.additives.vitaminC !== null && (
        <div className="line vitaminC">
            <div className="dv">
               {props.additives.vitaminC}
            </div>Vitamin C
        </div>)}
        
    
        <div className="dvCalorieDiet line">
            <div className="calorieNote">
                <span className="star"></span> <br/>
    
               
            </div>
        </div>
        
    </div>
    
    
    
    )


export default NutritionAdditives

