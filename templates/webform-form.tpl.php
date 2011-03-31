<?php
dsm($form);

/**
 * @file
 * Customize the display of a complete webform.
 *
 * This file may be renamed "webform-form-[nid].tpl.php" to target a specific
 * webform on your site. Or you can leave it "webform-form.tpl.php" to affect
 * all webforms on your site.
 *
 * Available variables:
 * - $form: The complete form array.
 * - $nid: The node ID of the Webform.
 *
 * The $form array contains two main pieces:
 * - $form['submitted']: The main content of the user-created form.
 * - $form['details']: Internal information stored by Webform.
 */
?>
<?php
  // If editing or viewing submissions, display the navigation at the top.
  if (isset($form['submission_info']) || isset($form['navigation'])) {
    print drupal_render($form['navigation']);
    print drupal_render($form['submission_info']);
  }

  // Print out the main part of the form.
  // Feel free to break this up and move the pieces within the array.
  /*echo '<div class="form-seperator">';
    print drupal_render($form['submitted']);
  echo '</div>';*/
  
  echo '<div class="custom-form">';
    switch ($form['details']['page_num']['#value']) {
      case '2':
        echo "<h1>Group One</h1>";
        break;
      case '3':
        echo "<h1>Group Two</h1>";
        break;      
      case '4':
        echo "<h1>Group Three</h1>";
        break;
      case '5':
        echo "<h1>Group Four</h1>";
        break;
      case '6':
        echo "<h1>Group Five</h1>";
        break;
      case '7':
        echo "<h1>Group Six</h1>";
        break;
      case '8':
        echo "<h1>Group Seven</h1>";
        break;
      case '9':
        echo "<h1>Group Eight</h1>";
        break;
      case '10':
        echo "<h1>Group Nine</h1>";
        break;

      default:
        // No Header on first page of form
        break;
    }
  echo '</div>';

  echo '<div class="form-seperator">';
    print drupal_render($form['submitted']);
  echo '</div>';

  // Always print out the entire $form. This renders the remaining pieces of the
  // form that haven't yet been rendered above.
    echo '<div class="webform-button-wrapper">';
      print drupal_render_children($form);
    echo '</div>';

  // Print out the navigation again at the bottom.
  if (isset($form['submission_info']) || isset($form['navigation'])) {
    unset($form['navigation']['#printed']);
      print drupal_render($form['navigation']);
  }
