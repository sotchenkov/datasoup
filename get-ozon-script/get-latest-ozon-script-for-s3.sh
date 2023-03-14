git clone git@github.com:alexeysot/ozon_to_google_sheets.git

cd ozon_to_google_sheets

git checkout ya_funcs

rm -rf .git LICENSE README.md .gitignore

zip -r ozon-to-gs.zip *

mv ozon-to-gs.zip ..

cd ..

rm -r ozon_to_google_sheets
