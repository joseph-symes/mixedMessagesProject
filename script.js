const returnRandomMessage = () => {
    const message = [];
    const returnStart = () => {
        const start = ['You', 'Everything', 'Think'];
    
        return start[Math.floor(Math.random()*3)];
    };
    message.push(returnStart());
    const returnMiddle = () => {
        const youMiddle = [' are', ' have', ' can'];
        const everythingMiddle = [' will', ' is', ' could'];
        const thinkMiddle = [' of', ': anything', ' how'];
        
        if (message[0] === 'You') {
            return youMiddle[Math.floor(Math.random()*3)];
        } else if (message[0] === 'Everything') {
            return everythingMiddle[Math.floor(Math.random()*3)];
        } else if (message[0] === 'Think') {
            return thinkMiddle[Math.floor(Math.random()*3)];
        }
    };
    message.push(returnMiddle());
    const returnEnd = () => {
        const youAreEnd = [' everything.', ' unlimited.', ' unstoppable.'];
        const youHaveEnd = [' everything you need.', ' what it takes.', ' no limits.'];
        const youCanEnd = [' do it!', ' have it all.', ' be anything.'];
        const everythingWillEnd = [' be just fine.', ' make sense.', ' come to you.'];
        const everythingIsEnd = [' not what it seems.', ' permitted.', ' simpler than you think.'];
        const everythingCouldEnd = [' happen.', ' go your way.', ' be known.'];
        const thinkOfEnd = [' the possibilities.', ' your happy place.', ' a solution.'];
        const thinkAnythingEnd = [' can happen.', ' is possible.', ' can be true.'];
        const thinkHowEnd = [' this can go your way.', ' many trillions of worlds there are.', ' unlimited you are.'];
        
        if (message[1] === ' are') {
            return youAreEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' have') {
            return youHaveEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' can') {
            return youCanEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' will') {
            return everythingWillEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' is') {
            return everythingIsEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' could') {
            return everythingCouldEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' of') {
            return thinkOfEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ': anything') {
            return thinkAnythingEnd[Math.floor(Math.random()*3)];
        } else if (message[1] === ' how') {
            return thinkHowEnd[Math.floor(Math.random()*3)];
        }
    };
    message.push(returnEnd());
    document.getElementById("messageStart").innerHTML = `${message[0]}`;
    document.getElementById("messageMiddle").innerHTML = `${message[1]}`;
    document.getElementById("messageEnd").innerHTML = `${message[2]}`;
};

//returnRandomMessage();
