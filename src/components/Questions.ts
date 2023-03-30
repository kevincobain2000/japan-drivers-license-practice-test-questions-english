// read from tsv file
import { readFileSync } from 'fs'
import { join } from 'path'
import path from 'path'

const __dirname = path.resolve(path.dirname('./')); 
const tsv = readFileSync(join(__dirname, 'questions.tsv'), 'utf8')

console.log(tsvJSON(tsv))
// convert tsv to json
function tsvJSON(tsv: string) {
    const lines = tsv.split("\n");
    const result = [];
    const headers = lines[0].split("\t");
  
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split("\t");
      if (currentline.length === 1) {
        continue;
      }
  
      for (let j = 0; j < headers.length; j++) {
        if (j == 0) {
            obj["question"] = currentline[j];
        }
        if (j == 1) {
            obj["img"] = currentline[j];
        }
        if (j == 2) {
            obj["answer"] = currentline[j] == 'true' ? true : false;
        }
        if (j == 3) {
            obj["explaination"] = currentline[j];
        }
      }
      obj['ansewered'] = null;
      obj['chosenAnswer'] = null;
  
      result.push(obj);
    }
  
    return result;
  }


const questions = tsvJSON(tsv)
export default questions
