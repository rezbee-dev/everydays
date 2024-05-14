# Read text file & "word" arg
# Parse text file into hashmap, key = "word", value = counter
# Display "value" for the given word arg

import sys
import re

def read_file(filename):
    with open(file=filename, encoding="utf-8") as f:
        return f.read()
        
def clean(text):
    cleaned_words = re.sub("[^\w\s]", "", text)
    cleaned_words = re.sub("(\r\n|\r|\n)", " ", cleaned_words)
    return re.sub("  ", " ", cleaned_words)
    
def extract(text):
    word_counts = {}
    words = text.split(" ")
    
    for word in words:
        word = word.lower()
        if word not in word_counts:
            word_counts[word] = 0
            
        word_counts[word] += 1
        
    return word_counts
        
def main():
    text = read_file("sample.txt")
    raw_words = clean(text)
    words = extract(raw_words)
    args = sys.argv
    
    print("Here's the text that will be analyzed:\n")
    print(text, "\n")
    
    if len(args) <= 1 or not args[1] or args[1].lower() not in words:
        print("Word not found")
        return
        
    print("Number of times the word '{}' appears: {}".format(args[1], words[args[1].lower()]))
    # print("Number of times the word",args[1], "' appears:", words[args[1].lower()], "times")
        
main()