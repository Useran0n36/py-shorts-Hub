let pyodideReady = loadPyodide();
let currentShortcut = null;
let originalCode = "";

const completed = JSON.parse(localStorage.getItem("completed") || "{}");
let streak = JSON.parse(localStorage.getItem("streak") || "{}");

const shortcuts = [];
let id = 1;

function add(title, cat, level, code, how, output, challenge) {
  shortcuts.push({ id: id++, title, category: cat, level, code, how, output, challenge });
}

/* ===== 100+ Python Shortcuts ===== */

/* ===== Beginner 1-30 ===== */
add("Even or Odd","Conditionals","Beginner",
`num = 4
print("Even" if num % 2 == 0 else "Odd")`,
"Checks remainder of num/2; 0 → Even else Odd","Even","Try another number");
add("Swap Two Variables","Basics","Beginner",
`a,b=3,5
a,b=b,a
print(a,b)`,
"Tuple unpacking swaps variables","5 3","Try three variables");
add("Reverse String","Strings","Beginner",
`s="python"
print(s[::-1])`,
"Slicing [::-1] reverses string","nohtyp","Try sentence");
add("List Comprehension Squares","Lists","Beginner",
`nums=[1,2,3,4]
print([x**2 for x in nums])`,
"Squares each element using list comprehension","[1,4,9,16]","Try cubes");
add("Check Empty List","Lists","Beginner",
`lst=[]
print(not lst)`,
"Empty list evaluates to False","True","Try non-empty list");
add("Merge Dictionaries","Dictionaries","Beginner",
`a={'x':1}
b={'y':2}
print({**a,**b})`,
"** operator merges dictionaries","{'x':1,'y':2}","Add another dict");
add("Enumerate List","Loops","Beginner",
`lst=['a','b']
for i,val in enumerate(lst):
  print(i,val)`,
"enumerate provides index and value","0 a\n1 b","Try longer list");
add("Filter Even Numbers","Lists","Beginner",
`nums=[1,2,3,4]
print(list(filter(lambda x:x%2==0,nums)))`,
"filter selects elements meeting condition","[2,4]","Filter odd numbers");
add("List to String","Strings","Beginner",
`lst=['a','b','c']
print(''.join(lst))`,
"Join list elements into string","abc","Use space delimiter");
add("Swap Case","Strings","Beginner",
`s="PyThOn"
print(s.swapcase())`,
"swapcase switches letter cases","pYtHoN","Try different string");
add("First N Fibonacci","Loops","Beginner",
`a,b=0,1
for _ in range(5):
  print(a,end=" ")
  a,b=b,a+b`,
"Generates first N Fibonacci numbers","0 1 1 2 3","Change N");
add("Check Membership","Conditionals","Beginner",
`nums=[1,2,3]
print(2 in nums)`,
"Checks if element is in list","True","Try 5 in nums");
add("Repeat String","Strings","Beginner",
`print("Hi "*3)`,
"Repeats string n times","Hi Hi Hi ","Change repeat count");
add("Max and Min","Lists","Beginner",
`nums=[1,2,3,4]
print(max(nums), min(nums))`,
"max/min functions find largest/smallest","4 1","Try negative numbers");
add("Absolute Value","Basics","Beginner",
`print(abs(-7))`,
"abs returns absolute value","7","Try another negative number");
add("Round Number","Basics","Beginner",
`print(round(3.14159,2))`,
"round(x,n) rounds to n decimals","3.14","Try 0 decimals");
add("String Length","Strings","Beginner",
`s='hello'
print(len(s))`,
"len() returns string length","5","Try sentence");
add("List Length","Lists","Beginner",
`lst=[1,2,3]
print(len(lst))`,
"len() returns list length","3","Try empty list");
add("Sum List Elements","Lists","Beginner",
`nums=[1,2,3,4]
print(sum(nums))`,
"sum adds list elements","10","Try negative numbers");
add("Repeat List Elements","Lists","Beginner",
`lst=[1,2]
print(lst*2)`,
"Repeats entire list","[1,2,1,2]","Try longer list");
add("Dictionary Keys List","Dictionaries","Beginner",
`d={'a':1,'b':2}
print(list(d.keys()))`,
"Get dictionary keys as list","['a','b']","Try values()");
add("Dictionary Values List","Dictionaries","Beginner",
`d={'a':1,'b':2}
print(list(d.values()))`,
"Get dictionary values as list","[1,2]","Try keys()");
add("String Lowercase","Strings","Beginner",
`s='PYTHON'
print(s.lower())`,
"Converts string to lowercase","python","Try upper()");
add("String Uppercase","Strings","Beginner",
`s='python'
print(s.upper())`,
"Converts string to uppercase","PYTHON","Try lower()");
add("Strip String","Strings","Beginner",
`s='  hello  '
print(s.strip())`,
"Removes spaces from both ends","hello","Try lstrip/rstrip()");
add("Find Index","Strings","Beginner",
`s='python'
print(s.find('t'))`,
"find() returns index of first occurrence","2","Try character not in string");
add("Count Substring","Strings","Beginner",
`s='hello world'
print(s.count('l'))`,
"Counts occurrences of substring","3","Try 'o'");
add("Check StartsWith","Strings","Beginner",
`s='python'
print(s.startswith('py'))`,
"Check if string starts with substring","True","Try other prefix");
add("Check EndsWith","Strings","Beginner",
`s='python'
print(s.endswith('on'))`,
"Check if string ends with substring","True","Try other suffix");
add("Is Digit","Strings","Beginner",
`s='123'
print(s.isdigit())`,
"Check if string contains only digits","True","Try '12a'");

/* ===== Intermediate 31-70 ===== */
add("Remove Duplicates","Lists","Intermediate",
`nums=[1,2,2,3]
print(list(dict.fromkeys(nums)))`,
"dict.fromkeys removes duplicates","[1,2,3]","Try strings list");
add("Check Palindrome","Strings","Intermediate",
`s='level'
print(s==s[::-1])`,
"Compare string with reverse","True","Try non-palindrome");
add("Dictionary Comprehension","Dictionaries","Intermediate",
`nums=[1,2,3,4]
squares={x:x**2 for x in nums}
print(squares)`,
"Creates dict with keys as numbers and values as squares","{1:1,2:4,3:9,4:16}","Try cubes");
add("Check Prime","Functions","Intermediate",
`def is_prime(n):
  print(all(n%i!=0 for i in range(2,n)))
is_prime(7)`,
"all() checks if n divisible by 2..n-1","True","Try non-prime");
add("Flatten List","Lists","Intermediate",
`matrix=[[1,2],[3,4]]
flat=[x for row in matrix for x in row]
print(flat)`,
"Nested list comprehension flattens 2D list","[1,2,3,4]","Try 3D list");
add("Count Vowels","Strings","Intermediate",
`s='hello world'
print(sum(1 for c in s if c in 'aeiou'))`,
"Counts vowels using generator","3","Try longer sentence");
add("All True in List","Conditionals","Intermediate",
`lst=[True,True,False]
print(all(lst))`,
"all() returns True if all elements True","False","Try all True");
add("Any True in List","Conditionals","Intermediate",
`lst=[False,False,True]
print(any(lst))`,
"any() returns True if any element True","True","All False list");
add("Lambda Map Squares","Functions","Intermediate",
`nums=[1,2,3,4]
print(list(map(lambda x:x**2, nums)))`,
"map applies function to all elements","[1,4,9,16]","Try cubes");
add("Sort Dict by Value","Dictionaries","Intermediate",
`d={'a':3,'b':1,'c':2}
print(sorted(d.items(),key=lambda x:x[1]))`,
"sorted with key sorts dict items by value","[('b',1),('c',2),('a',3)]","Sort descending");
add("Zip Lists","Lists","Intermediate",
`a=[1,2,3]
b=['x','y','z']
print(list(zip(a,b)))`,
"zip combines elements from multiple lists","[(1,'x'),(2,'y'),(3,'z')]","Try different length lists");
add("F-String Formatting","Strings","Intermediate",
`name='Alice'
age=25
print(f"My name is {name} and I am {age}")`,
"F-strings embed variables in string","My name is Alice and I am 25","Try other variables");
add("Reverse List","Lists","Intermediate",
`lst=[1,2,3,4]
lst.reverse()
print(lst)`,
"reverse() reverses list in-place","[4,3,2,1]","Try strings");
add("Sort List Desc","Lists","Intermediate",
`lst=[3,1,4,2]
lst.sort(reverse=True)
print(lst)`,
"sort(reverse=True) sorts descending","[4,3,2,1]","Try ascending");
add("Set Union","Sets","Intermediate",
`a={1,2}
b={2,3}
print(a|b)`,
"| operator gives union","{1,2,3}","Try intersection");
add("Set Intersection","Sets","Intermediate",
`a={1,2}
b={2,3}
print(a&b)`,
"& operator gives intersection","{2}","Try union");
add("Set Difference","Sets","Intermediate",
`a={1,2,3}
b={2,3,4}
print(a-b)`,
"- operator gives difference","{1}","Try b-a");
add("Random Choice","Modules","Intermediate",
`import random
lst=[1,2,3]
print(random.choice(lst))`,
"random.choice picks random element","1 (or 2/3)","Try random.sample");
add("Random Shuffle","Modules","Intermediate",
`import random
lst=[1,2,3]
random.shuffle(lst)
print(lst)`,
"shuffle randomizes list","[3,1,2] etc","Try multiple times");

/* ===== Advanced 71-100+ ===== */
add("Transpose Matrix","Lists","Advanced",
`matrix=[[1,2,3],[4,5,6]]
print([list(x) for x in zip(*matrix)])`,
"zip(*) transposes matrix","[[1,4],[2,5],[3,6]]","Try 3x3 matrix");
add("Generator Expression Sum","Functions","Advanced",
`nums=[1,2,3,4]
print(sum(x*x for x in nums))`,
"Generator computes squares sum","30","Try cubes");
add("Enumerate Dict","Dictionaries","Advanced",
`d={'a':1,'b':2}
for i,(k,v) in enumerate(d.items()):
  print(i,k,v)`,
"Enumerate dict items","0 a 1\n1 b 2","Try more items");
add("Chain Comparison","Conditionals","Advanced",
`x=5
print(1<x<10)`,
"Python allows chain comparisons","True","Try x=0");
add("Swap Variables Three","Basics","Advanced",
`a,b,c=1,2,3
a,b,c=c,a,b
print(a,b,c)`,
"Tuple unpacking swaps three variables","3 1 2","Try other numbers");
add("Flatten 3D List","Lists","Advanced",
`matrix=[[[1],[2]],[[3],[4]]]
flat=[x for row in matrix for sub in row for x in sub]
print(flat)`,
"Triple nested comprehension flattens 3D list","[1,2,3,4]","Try another 3D list");
add("Default Dict","Dictionaries","Advanced",
`from collections import defaultdict
d=defaultdict(int)
d['a']+=1
print(d)`,
"defaultdict sets default values","defaultdict(<class 'int'>, {'a': 1})","Add more keys");
add("Counter Frequency","Dictionaries","Advanced",
`from collections import Counter
lst=[1,2,2,3]
print(Counter(lst))`,
"Counts element frequencies","Counter({2:2,1:1,3:1})","Try letters");
add("Map with Lambda","Functions","Advanced",
`nums=[1,2,3]
print(list(map(lambda x:x+1,nums)))`,
"map applies lambda to list","[2,3,4]","Try x*2");

/* ===== UI LOGIC ===== */
// Same as previous JS
const list = document.getElementById("shortcutList");
const codeBox = document.getElementById("code");
const explain = document.getElementById("explain");
const expected = document.getElementById("expected");
const challenge = document.getElementById("challenge");
const output = document.getElementById("output");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const streakBox = document.getElementById("streakBox");
const recommend = document.getElementById("recommend");
const themeBtn = document.getElementById("themeBtn");
const search = document.getElementById("search");
const category = document.getElementById("category");
const level = document.getElementById("level");

function render() {
  list.innerHTML = "";
  const s = search.value.toLowerCase();
  const c = category.value;
  const l = level.value;
  shortcuts.filter(x=>(c==="All"||x.category===c)&&(l==="All"||x.level===l)&&x.title.toLowerCase().includes(s))
  .forEach(x=>{
    const d=document.createElement("div");
    d.className="shortcut";
    d.textContent=x.title;
    d.onclick=()=>loadShortcut(x);
    list.appendChild(d);
  });
  recommendNext();
}

function loadShortcut(s){
  currentShortcut=s;
  originalCode=s.code;
  codeBox.value=s.code;
  codeBox.classList.remove("try");
  explain.textContent=s.how;
  expected.textContent=s.output;
  challenge.textContent=s.challenge;
  output.textContent="";
}

function tryYourself(){if(!currentShortcut) return;codeBox.classList.add("try");output.textContent="✍️ Modify the code and run it!";}
function resetCode(){if(!currentShortcut) return;codeBox.value=originalCode;codeBox.classList.remove("try");output.textContent="Reset to original code.";}
async function runCode(){const pyodide=await pyodideReady;try{let r=pyodide.runPython(codeBox.value);output.textContent=r??"Executed ✔";if(currentShortcut){completed[currentShortcut.id]=true;localStorage.setItem("completed",JSON.stringify(completed));updateProgress();updateStreak();}}catch(e){output.textContent=e;}}
function updateProgress(){const done=Object.keys(completed).length;const p=Math.round(done/shortcuts.length*100);progressFill.style.width=p+"%";progressText.textContent=`${p}% Completed (${done}/${shortcuts.length})`;}
function updateStreak(){const today=new Date().toDateString();if(streak.last!==today){streak.count=(streak.last&&new Date(streak.last).getTime()+86400000===new Date(today).getTime())?(streak.count||0)+1:1;streak.last=today;localStorage.setItem("streak",JSON.stringify(streak));}streakBox.textContent=`🔥 ${streak.count||1} day streak`;}
function recommendNext(){const n=shortcuts.find(s=>!completed[s.id]);recommend.textContent=n?n.title:"🎉 All shortcuts completed!";}
function saveFavorite(){let f=JSON.parse(localStorage.getItem("fav")||"[]");f.push(codeBox.value);localStorage.setItem("fav",JSON.stringify(f));alert("Saved ⭐");}
themeBtn.onclick=()=>document.body.classList.toggle("light");
search.oninput=category.onchange=level.onchange=render;
render();updateProgress();updateStreak();
