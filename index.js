// Code your solution in this file!
const distanceFromHqInBlocks=(location)=> {
    let homeBase= '42';
    return (Math.abs(location- homeBase));
}

const distanceFromHqInFeet=(location)=> {
    let homeQuarter='42';
    return (Math.abs(location - homeQuarter)* 264);
}

const distanceTravelledInFeet=(begin,end)=> {
    return (Math.abs(begin-end)*264);
}

const calculatesFarePrice=(start,destination)=> {
    let travel= Math.abs((destination - start) * 264);
    if (travel<=400) {
    return 0;
} if  (travel > 400 && travel < 2000) {
    return (travel-400) * 0.02;
} else if (travel > 2000 && travel < 2500){
    return 25
} else if (travel > 2500) {
    return "cannot travel that far"
}


}