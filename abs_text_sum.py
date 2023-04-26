import sys

sys.path.append('/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages')

from transformers import PegasusForConditionalGeneration, PegasusTokenizer

def abs_text_sum(source_text):
    model_name = 'google/pegasus-xsum'
    device = 'cpu'
    tokenizer = PegasusTokenizer.from_pretrained(model_name)
    model = PegasusForConditionalGeneration.from_pretrained(model_name).to(device)
    tokenized_text = tokenizer.prepare_seq2seq_batch(source_text, return_tensors='pt')
    translated = model.generate(**tokenized_text)
    result = tokenizer.batch_decode(translated, skip_special_tokens=True)
    print(result)
    return result


#text = input("Please type in the text:\n")
#abs_text_sum("""""")