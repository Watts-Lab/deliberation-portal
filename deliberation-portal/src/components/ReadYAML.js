import yaml from 'js-yaml'
import fs from 'fs'

export function ReadYAML({file}) {
    let doc;

    try {
      doc = yaml.load(fs.readFileSync('/Users/kimberlyepstein/deliberation-portal/deliberation-portal/src/treatments/treatments.weinstein.yaml', 'utf8'));
      console.log(doc);
    } catch (e) {
      console.log(e);
    }
}