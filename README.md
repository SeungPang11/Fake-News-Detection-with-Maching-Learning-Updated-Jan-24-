# Fake-News-Detection-with-Maching-Learning
_**Techniques**_: Naive Bayes, Logistics Regression, XGBoost, TF-IDF, SMOTE <br />
_**Tools**_: Python, Javascript, CSS, React, Flask 

**Web Application Development - Python, Javascript, CSS, React, Flask**
<img width="500" alt="Screen Shot 2023-01-20 at 10 21 10 AM" src="https://user-images.githubusercontent.com/67944800/214330280-93545534-3546-4fb9-af83-986c1ac6a820.png">


## Datasets
**[Fake News Net](https://github.com/KaiDMML/FakeNewsNet)** <br />

* _**politifact_fake.csv**_ - 432 fake news collected from Politifact 
* _**politifact_real.csv**_ - 624 real news collected from Politifact 
* _**gossipcop_fake.csv**_ - 5323 fake news collected from GossipCop
* _**gossipcop_real.csv**_ - 16817 real news collected from GossipCop

## Exploratory Data Analysis
____**Find most frequent words of each dataset for further analysis**____<br />

**Gossip Cop Dataset** 

<img width="430" alt="Screen Shot 2023-12-20 at 2 57 35 AM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/3a5ac8b9-70de-4dcd-b1cd-acdc5e8f02a4">
<img width="430" alt="Screen Shot 2023-12-20 at 2 58 10 AM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/847bbc3f-4e06-49bb-b906-704c5d5d9934">


**Politifact Dataset** 

<img width="430" alt="Screen Shot 2023-12-20 at 2 58 33 AM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/7a854190-fd8a-4c66-ad20-c02471b721eb">
<img width="430" alt="Screen Shot 2023-12-20 at 2 58 43 AM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/d5ec138c-5bb5-4788-aa79-d033d9caafad">


## Methods
____**TF-IDF**____<br />
* Transform texts (news titles) into a meaningful representation of numbers while removing stopwords.

__**SMOTE**__<br />
* Before SMOTE, the model was good at detecting real news (shown by high True Positive score),<br /> 
while performing poorly at detecting fake news (shown by low True Negative score).<br /> 

* SMOTE is used to tweak the model to reduce False Negatives, at the cost of increasing False Positives.<br /> 

* The result of using SMOTE is generally an increase in recall, at the cost of lower precision.

__**Naive Bayes**__<br />
* Naive Bayes is an algorithm based on the Bayes Theorem and is widely used for classification <br /> 
and Natural Language Processing (NLP) tasks.

__**Logistic Regression**__<br />
* Logistic regression classifier is used for modeling the probability of a discrete outcome given an input variable.

__**Support Vector Machine**__<br />
* SVM algorithm finds a hyperplane in an N-dimensional space(# of features) that distinctly classifies the data points.
* **NOT USED** because SVM is **computationally intensive** and works better on small data with large features (this dataset has small features).

__**XGBoost**__<br />
* XGBoost is based on the gradient-boosted trees algorithm, which is a supervised learning algorithm.<br /> 
* It attempts to predict a target variable by combining the estimates of a set of simpler models.

____________________________________________________
## Result - Updated Dec 2023
* Thorough EDA to visualize word count distributions of news titles
* Updated text pre-processing to better remove emojis, URLs, special characters, punctuations, emojis, and stop words 
* Comparisons of model performance before imbalance data handling, SMOTE, and SMOTE + Undersampling

* **Improved performance**  
  <img width="848" alt="Screen Shot 2023-12-20 at 4 47 45 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/289542f6-4c0d-443b-9704-0fe567363884">

* **Analysis** <br>
  -Significant improvement from both the **project's previous result** and the **previous research performance:** <br>
  a **32%** increase in F1 from the project's previous best result and, <br>
  a **8%** increase in F1 from the previous research's best performance. <br>
  <br>
  -**Multinomial Naive Bayes** achieved the best performance (High Recall and F1). <br>
  -**XGBoost** worst performance (XGBosst requires large amount of data, and works best with high dimensional data)
  

__________________________________________________________________________
## Previous Result
* Logistic Regression and Naive Bayes were the best-performing models for fake news detection.
* By combining Politifact and GossipCop datasets then utilizing Logistic Regression and SMOTE, 
the F1 score improved from **0.63 to 0.65**.
* FakeNewsNet’s F1 scores for GossipCop dataset are higher due to the greater number of real news compared to the number of fake news.

* Confusion Matrix - Before and After SMOTE
<img width="419" alt="Screen Shot 2023-10-31 at 8 09 50 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/2397b3aa-c612-42d7-9caa-ad729ce65374">

* Performance of This Project
<img width="600" alt="Screen Shot 2023-01-24 at 10 04 40 AM" src="https://user-images.githubusercontent.com/67944800/214330043-f01df4ae-e13d-4e4d-ad3e-0f1fc33a6ccb.png">

* Performance of the Previous Research <br />
<img width="600" alt="Screen Shot 2023-01-01 at 11 38 23 AM copy" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/0f25ebec-6e85-463c-98b7-b82e4806ceba">







