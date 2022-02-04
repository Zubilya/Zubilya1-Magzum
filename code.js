window.onload = function() {
  check = (word) => {
    if (word.length > 8) {
      word = '<span style="background:yellow;">' + word + '</span>';
    } else {
      word;
    }
    return word;
  }

  var str = document.querySelector("#Second").innerText;
  var newt = str.trim().split(' ').map(check).join(' ');
  document.querySelector("#Second").innerHTML = newt;
    
    Second.innerHTML = Second.innerHTML
    .split(/\.[^\.|<]/)
    .join('.</div><div>') + '</div>';

}

const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Text generator';
document.body.appendChild(link);

const paragraph = document.querySelector('div');
paragraph.innerHTML = paragraph.innerText.replace(/[?]/g, '🤔');
paragraph.innerHTML = paragraph.innerText.replace(/[!]/g, '😲');

const wordCount = Second.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, Second)